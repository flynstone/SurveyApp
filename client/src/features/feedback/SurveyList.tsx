import { List } from '@mui/material';
import { Survey } from "../../app/models/survey"
import SurveyCard from './SurveyCard';

interface Props {
  surveys: Survey[];
}

export default function SurveyList({surveys}: Props) {
  return (
    <>
      <List>
        {surveys.map(survey => (
          <SurveyCard key={survey.id} survey={survey} />
        ))}
      </List>
    </>
  )
}