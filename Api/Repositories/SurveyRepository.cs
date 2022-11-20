using Api.Data;
using Api.Interfaces;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Repositories;

public class SurveyRepository : RepositoryBase<Survey>, ISurveyRepository
{
    public SurveyRepository(AppDbContext context): base(context) { }

    // Get all surveys
    public async Task<IEnumerable<Survey>> GetSurveys(bool trackChanges) =>
        await FindAll(trackChanges).ToListAsync();

    // Get a single survey
    public async Task<Survey> GetSurvey(int id, bool trackChanges) =>
        await FindByCondition(a => a.Id.Equals(id), (trackChanges ? 1 : 0) != 0).SingleOrDefaultAsync();

    // Add a survey
    public void CreateSurvey(Survey survey) =>
        Create(survey);
    
}