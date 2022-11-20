import { Button, Card, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Card style={{margin: "2rem", padding: "2rem"}}>
       <CardActions style={{display: "flex", justifyContent: "space-around"}}>
          <Button component={Link} to={'/surveypage'}>Start</Button>
          <Button component={Link} to={`/sondage`}>Commencer</Button>
      </CardActions>
    </Card>
  )
}