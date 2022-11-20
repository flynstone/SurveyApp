using Api.Interfaces;
using Api.Repositories;
using AutoMapper;

namespace Api.Extensions;

public static class ServiceExtensions
{
    public static void ConfigureScopes(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(MappingProfile));
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<ISurveyRepository, SurveyRepository>();
    }
}