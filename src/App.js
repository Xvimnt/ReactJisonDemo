import './App.css';
import Navbar from './components/navbar/'
import Editors from './components/editors/'
import Footer from './components/footer/'
// ---------------------
// Material Components
// ---------------------
import { Toolbar, ThemeProvider, createTheme, Container, Grid, Paper } from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container >
        <Navbar />
        <Toolbar />
        <Toolbar />
        <Editors />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
