using Api.DataTransferObjects;
using Api.Interfaces;
using Api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

public class SurveysController : BaseApiController
{
  // Initialize the db context.
  private readonly IUnitOfWork _unitOfWork;
  private readonly IMapper _mapper;
  public SurveysController(IUnitOfWork unitOfWork, IMapper mapper)
  {
      _unitOfWork = unitOfWork;
      _mapper = mapper;
  }

  // api/surveys
    [HttpGet]
    public async Task<ActionResult<List<SurveyDto>>> GetSurveys() 
    {
        // Get all surveys
        var surveys = await _unitOfWork.Survey.GetSurveys(trackChanges: false);

        // Map surveys to surveys DTOs
        var surveysDto = _mapper.Map<IEnumerable<SurveyDto>>(surveys);

        return Ok(surveysDto);
    }

    // api/surveys/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Survey>> GetSurvey(int id)
    {
        // Get survey by id.
        var survey = await _unitOfWork.Survey.GetSurvey(id, trackChanges: false);

        // Handle not found.
        if (survey == null) return NotFound();

        var surveyDto = _mapper.Map<SurveyDto>(survey);
        return Ok(surveyDto);
    }

    // api/surveys
    [HttpPost]
    public async Task<ActionResult<CreateSurveyDto>> CreateSurvey([FromBody]CreateSurveyDto surveyDto)
    {
        // Map Survey to Dto
        var survey = _mapper.Map<Survey>(surveyDto);

        // Add survey in memory
        _unitOfWork.Survey.CreateSurvey(survey);

        // Save the survey in the database
        await _unitOfWork.SaveAsync();

        return NoContent();
    }
}