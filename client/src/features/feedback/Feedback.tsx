import { useEffect, useState } from "react";
import { Survey } from "../../app/models/survey";
import SurveyList from "./SurveyList";


export default function Feedback() {
  const [surveys, setSurveys] = useState<Survey[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/surveys')
    .then(response => response.json())
    .then(data => setSurveys(data))
  }, [])
  
  return (
    <>
      <SurveyList surveys={surveys}></SurveyList>
    </>
  )
}