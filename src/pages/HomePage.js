import React from "react";
import Container from '@mui/material/Container';
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import BG from '../assets/img/BG.jpg';


const theme = createTheme({
  palette: {
    primary: {
      main: '#A32B17',
    },
    secondary: {
      main: '#AC5D5D',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontSize: '4rem',
      fontWeight: 600,
      textAlign: 'center',
      mt: 4,
    },
    h5: {
      fontSize: '2rem',
      textAlign: 'center',
      color: 'text.secondary',
      mt: 2,
    },
    body1: {
      fontSize: '1.5rem',
      textAlign: 'center',
      mt: 4,
    },
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container 
        sx={{
          position: 'relative',
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          minWidth: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', 
          alignItems: 'flex-start',
          color: '#B9922F',
          textAlign: 'left',
          padding: '100px 0 0 0',
        }}>
      <Typography variant="h2">
        Welcome to our store!
      </Typography> 

      <Typography variant="h5">
        Discover our latest products and offers
      </Typography>

        <Typography variant="body1">
        Start shopping now!
        </Typography>
        
        <Button
          component={Link}
          to="/shop"
          variant="contained"
          size="large"
          color="primary"
          sx={{ mt: 5, ml: 50 }}>
          Go to Shop
        </Button>
        
      </Container>
    </ThemeProvider>
  )
}

export default HomePage