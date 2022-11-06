import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Survey } from "../../app/models/survey";


export default function FeedbackDetails() {
  const {id} = useParams<{id: string}>();
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/surveys/${id}`)
      .then(res => setSurvey(res.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [id])

  if (loading) return <h3>Loading...</h3>

  if (!survey) return <h3>Survey not found</h3>

  return (
    <Typography variant='h2'>
      Feedback Details
    </Typography>
  )
}