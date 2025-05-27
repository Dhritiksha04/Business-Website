import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        width: '100vw',
        overflowX:'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74, 20, 140, 0.1) 0%, rgba(74, 20, 140, 0) 70%)',
          top: '-300px',
          right: '-150px'
        }
      }}
    >
      <Container maxWidth="lg" sx={{
        width: '100%',
        maxWidth: '100% !important',
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
              }}
            >
              Welcome to <Box component="span" sx={{ color: 'secondary.dark' }}>Shree Radhe Services</Box>
            </Typography>
            <Typography
              variant="h5"
              component="p"
              gutterBottom
              sx={{
                color: 'text.secondary',
                mb: 4,
                maxWidth: '500px',
                fontSize: { xs: '1.1rem', sm: '1.25rem' }
              }}
            >
              Quality Services You Can Trust
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="#services"
                sx={{
                  borderRadius: '50px',
                  boxShadow: '0 4px 20px rgba(98, 45, 158, 0.72)'
                }}
              >
                Explore Services
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="#contact"
                sx={{
                  borderRadius: '50px',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px'
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                width: '100%',
                height: '500px',
                borderRadius: '20px',
                background: 'linear-gradient(45deg, #1a1a2e 0%, #16213e 100%)',
                boxShadow: '0 20px 40px rgba(26, 26, 46, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(233,69,96,0.3) 0%, rgba(233,69,96,0) 70%)',
                  bottom: '-100px',
                  right: '-100px'
                }
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;