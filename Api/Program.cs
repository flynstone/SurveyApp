using Api.Data;
using Api.Extensions;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(opt => 
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors();
// Import service scopes from extensions.
builder.Services.ConfigureScopes();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseCors(opt => 
{
    opt.AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("http://localhost:3000");
});

app.UseAuthorization();

app.MapControllers();

// Add migrations on project startup.
using var scope = app.Services.CreateScope();

var services = scope.ServiceProvider;
var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
    context.Database.Migrate();
    DbInitializer.Initialize(context);
}
catch(Exception ex)
{
    logger.LogError(ex, "There was a problem while creating the migration.");
}

app.Run();
