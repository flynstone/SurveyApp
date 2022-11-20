namespace Api.Interfaces;

public interface IUnitOfWork
{
    ISurveyRepository Survey { get; }
    Task SaveAsync();
}