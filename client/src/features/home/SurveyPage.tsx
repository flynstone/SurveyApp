import { Button, Rating, TextField } from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { styled } from '@mui/material/styles';
import { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import * as Yup from 'yup';
import MyTextInput from "../../app/common/form/MyTextInput";
import { Box } from "@mui/system";
import { useState } from "react";

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

const IconContainer = (props: IconContainerProps) => {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const getLabelText = (value: number) => {
  return `${value}, ${customIcons[value]}`;
}


export default function SurveyPage() {
  const initialState = {
    employee: '',
    envRating: '',
    envDetails: '',
    moodRating: '',
    moodDetails: ''
  };

  const validationSchema = Yup.object({
    envRating: Yup.string().required(),
    moodRating: Yup.string().required(),
  })


  return (
    <Formik validationSchema={validationSchema} initialValues={initialState} onSubmit={values => console.log(values)}>
      {({ values: survey, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', paddingTop: '4rem' }} autoComplete='off'>
          <Box>
            <div className="container">
              <MyTextInput name="employee" placeholder="Employee Id [Optional]" />
            </div>

            <div className="container">
              <label htmlFor="envRating">Environment Rating</label>
              <StyledRating
                name='envRating'
                IconContainerComponent={IconContainer}
                onChange={handleChange}
                getLabelText={(value: number) => customIcons[value].label}
                highlightSelectedOnly
              />
              <ErrorMessage name='envRating' render={error => <label style={{ color: 'red' }} >{error}</label>}></ErrorMessage>
            </div>

            <div className="container">
              <MyTextInput name='envDetails' placeholder="Details" />
            </div>

            <div className="container">
              <label htmlFor="moodRating">Mood Rating</label>
              <StyledRating
                name='moodRating'
                IconContainerComponent={IconContainer}
                onChange={handleChange}
                getLabelText={(value: number) => customIcons[value].label}
                highlightSelectedOnly
              />
              <ErrorMessage name='moodRating' render={error => <label style={{ color: 'red' }} >{error}</label>}></ErrorMessage>
            </div>

            <div className="container">
              <MyTextInput name="moodDetails" placeholder="Details" />
            </div>

            <div className="button-container">
              <Button variant='contained' type='submit' style={{ width: '25%' }}>Save</Button>
            </div>
          </Box>


        </Form>
      )}

    </Formik>

  )
}