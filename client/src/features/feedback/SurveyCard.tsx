import { ListItem, ListItemText } from '@mui/material';
import { Survey } from "../../app/models/survey";

interface Props {
  survey: Survey;
}

export default function SurveyCard({survey}: Props) {
  return (
    <>
      <ListItem key={survey.id}>
        <ListItemText>
          {survey.employee} - {survey.envRating} - {survey.envDetails} - {survey.moodRating} - {survey.moodDetails}
        </ListItemText>

      </ListItem>
    </>
  )
}