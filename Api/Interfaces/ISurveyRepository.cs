using Api.Models;

namespace Api.Interfaces;

public interface ISurveyRepository
    {
        Task<IEnumerable<Survey>> GetSurveys(bool trackChanges);
        Task<Survey> GetSurvey(int id, bool trackChanges);
        void CreateSurvey(Survey survey);
    }