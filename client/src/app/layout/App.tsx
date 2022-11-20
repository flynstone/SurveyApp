import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import DashboardPage from '../../features/dashboard/DashboardPage';
import HomePage from '../../features/home/HomePage';
import SurveyPage from '../../features/home/SurveyPage';
import Header from './Header';
import './styles.scss';

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
        <Route exact path='/surveys' component={DashboardPage} />
        <Route path='/surveypage' component={SurveyPage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
