import { Button, Card, CardActions, CardContent, CardHeader, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Survey } from "../../app/models/survey";

interface Props {
  survey: Survey;
}

export default function SurveyCard({survey}: Props) {
  return (
    <Card style={{margin: "2rem", padding: "2rem"}}>
      <CardHeader title={survey.employee} />
      <CardContent>
        <Typography variant='h6'>
          {survey.envRating} / {survey.envDetails}
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          {survey.moodRating} / {survey.moodDetails}
        </Typography>
      </CardContent>
      {/* <CardActions>
          <Button component={Link} to={`/feedback/${survey.id}`} size="small">View</Button>
      </CardActions> */}
    </Card>
  )
}