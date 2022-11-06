using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SurveysController : ControllerBase
{
  // Initialize the db context.
  private readonly AppDbContext _context;
  public SurveysController(AppDbContext context)
  {
    _context = context;
  }

  [HttpGet]
  public async Task<ActionResult<List<Survey>>> GetSurveys()
  {
    return await _context.Surveys.ToListAsync();
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Survey>> GetSurvey(int id)
  {
    return await _context.Surveys.FindAsync(id);
  }
}