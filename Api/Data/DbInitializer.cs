using Api.Models;

namespace Api.Data;

public static class DbInitializer
{
  public static void Initialize(AppDbContext context)
  {
    // Make sure database is empty before seeding.
    if (context.Surveys.Any()) return;

    // Seed data for testing purposes.
    var surveys = new List<Survey>
    {
      new Survey
      {
        EnvRating = "1 Star",
        EnvDetails = "Too noisy",
        MoodRating = "1 Star",
        MoodDetails = "Outside of work"
      },
      new Survey
      {
        Employee = "9915",
        EnvRating = "3 Stars",
        MoodRating = "4 Stars"
      },
      new Survey
      {
        EnvRating = "4 Stars",
        MoodRating = "1 Star",
        MoodDetails = "Work related"
      }
    };

    // Loop through list and save data in memory
    foreach(var survey in surveys)
    {
      context.Surveys.Add(survey);
    }

    // Save the data in the database
    context.SaveChanges();
  }
}