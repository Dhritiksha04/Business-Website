import React from 'react';
import { ThemeProvider, CssBaseline, Fab, useMediaQuery, Box, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navbar from '../components//Navbar';
import HeroSection from '../components/HeroSection';
import About from './About';
import Service from './Service';
import Location from '../components/Location';
import Contact from './Contact';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import ImageCarousel from '../components/ImageCarousel';
import img1 from '../assets/img-1.jpeg';
import img2 from '../assets/img-2.jpeg';
import img3 from '../assets/img-3.jpeg';
import img4 from '../assets/img-4.jpeg';
import img5 from '../assets/img-5.jpeg';
import img6 from '../assets/img-6.jpeg';
import img7 from '../assets/img-7.jpeg';
import img8 from '../assets/img-8.jpeg';
import img9 from '../assets/img-9.jpeg';
import img10 from '../assets/img-10.jpeg';
import img11 from '../assets/jp-1.jpg';
import img12 from '../assets/jp-2.jpg';
import img13 from '../assets/jp-3.jpg';
import img14 from '../assets/jp-5.jpg';

// Modern theme (move this to a separate theme.js file if preferred)
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1A0033',       // Deep Purple (Primary)
      light: '#7B1FA2',      // Medium Purple
      dark: '#311B92',       // Dark Purple
    },
    secondary: {
      main: '#7E57C2',       // Soft Purple (Secondary)
      light: '#B39DDB',      // Light Purple
      dark: '#5E35B1',       // Darker Purple
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '12px 24px',
        },
      },
    },
  },
});

function Home() {
  const isVerySmall = useMediaQuery('(max-width:350px)');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const carouselImages = [img1, img2, img11, img14, img13, img3, img4, img5,img12, img6, img7, img8, img9, img10];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="back-to-top-anchor" />

      <Navbar isVerySmall={isVerySmall} isMobile={isMobile} />
      <HeroSection />

      <Box sx={{
        py: 8,
        backgroundColor: theme.palette.background.default
      }}>
        <ImageCarousel
          images={carouselImages}
          autoPlay={true}
          interval={6000} 
        />
      </Box>

      <About />
      <Service />
      <Location />
      <Contact />
      <Footer />

      <ScrollTop>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default Home;