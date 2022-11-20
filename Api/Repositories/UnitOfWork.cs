using Api.Data;
using Api.Interfaces;

namespace Api.Repositories;

public class UnitOfWork : IUnitOfWork
{
    private AppDbContext _context;
    private ISurveyRepository _surveyRepository;

    public UnitOfWork(AppDbContext context)
    {
        _context = context;
    }

    public ISurveyRepository Survey
    {
        get
        {
            if (_surveyRepository == null)
                _surveyRepository = new SurveyRepository(_context);
            return _surveyRepository;
        }
    }
    public async Task SaveAsync()
    {
        int num = await this._context.SaveChangesAsync();
    }
}