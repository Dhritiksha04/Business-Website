import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{
          fontWeight: 700,
          mb: 6,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
           background: 'linear-gradient(90deg, #4A148C 0%, #7B1FA2 100%)',
            borderRadius: '2px'
          }
        }}>
          About Us
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ maxWidth: 900, mx: 'auto', fontSize: "20px" }}>
          At Shree Radhe Services, we are dedicated to offering reliable and accessible citizen services.
          Our mission is to simplify complex government-related processes for the general public.
          We provide secure, efficient, and user-friendly solutions for various documentation and verification needs.
          Whether it's pension verification, tax filing, or identity services, we strive to make everything smooth and stress-free.
          With a strong focus on trust, transparency, and convenience, we ensure every client feels supported.
          We believe in service that's fast, accurate, and truly helpful.
          From first-time applicants to experienced users, we provide the same level of care and attention. Choose Shree Radhe Services — where public service meets personal care.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;