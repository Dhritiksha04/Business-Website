import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const Location = () => {
  return (
    <Box id="location" sx={{ py: 8 }}>
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
            background: 'linear-gradient(90deg, #e94560 0%, #1a1a2e 100%)',
            borderRadius: '2px'
          }
        }}>
          Our Location
        </Typography>
        <Paper elevation={3} sx={{ mt: 4 }}>
          <iframe
            title="Shree Radhe services"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9019842934895!2d72.6196408!3d22.9906315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8609239f14a3%3A0x30e1a43295c0835c!2sJeevan%20praman%20Life%20certificate%20for%20pensioners%20Ahmedabad!5e0!3m2!1sen!2sin!4v1747462740724!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Paper>
      </Container>
    </Box>
  );
};

export default Location;