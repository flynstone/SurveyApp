namespace Api.Models;

public class Survey 
{
  public int Id {get;set;}
  public string? Employee { get; set; }
  public string EnvRating {get;set;}
  public string? EnvDetails {get;set;}
  public string MoodRating {get;set;}
  public string? MoodDetails {get;set;}
}