using Api.DataTransferObjects;
using Api.Models;
using AutoMapper;

namespace Api.Extensions;

public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Survey, SurveyDto>().ReverseMap();
            CreateMap<CreateSurveyDto, Survey>();
        }
    }