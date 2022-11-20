using System.ComponentModel.DataAnnotations;

namespace Api.DataTransferObjects;

public class CreateSurveyDto
{
    // Optional
    public string? Employee { get; set; }

    [Required(ErrorMessage = "Rating is required")]
    public string EnvRating { get; set; }

    // Optional
    public string? EnvDetails { get; set; }

    [Required(ErrorMessage = "Rating is required")]
    public string MoodRating { get; set; }

    // Optional
    public string? MoodDetails { get; set; }
}