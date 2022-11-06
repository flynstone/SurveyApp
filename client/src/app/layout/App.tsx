import { useState } from 'react';
import Feedback from '../../features/feedback/Feedback';
import Header from './Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import '@fontsource/grandstander/300.css';
import '@fontsource/grandstander/400.css';
import '@fontsource/grandstander/500.css';
import '@fontsource/grandstander/700.css';
import FeedbackDetails from '../../features/feedback/FeedbackDetails';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Grandstander'
      ].join(','),
    },
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/feedback' component={Feedback} />
        <Route path='/feedback/:id' component={FeedbackDetails} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
