import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Divider, 
  IconButton,
  Link
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn, 
  Facebook, 
  Instagram, 
  Twitter,
  LinkedIn
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6,
        bgcolor: 'primary.main', 
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1,fontSize:"14px"  }}>
                <Link href="#home" color="inherit" underline="hover">
                  Home
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1, fontSize:"14px"  }}>
                <Link href="#about" color="inherit" underline="hover">
                  About Us
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1, fontSize:"14px"  }}>
                <Link href="#services" color="inherit" underline="hover">
                  Services
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1, fontSize:"14px" }}>
                <Link href="#location" color="inherit" underline="hover">
                  Location
                </Link>
              </Box>
              <Box component="li" sx={{ fontSize: "14px" }}>
                <Link href="#contact" color="inherit" underline="hover">
                  Contact
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Get in touch
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ mr: 1, color: 'secondary.main' }} />
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                ashohinee@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ mr: 1, color: 'secondary.main' }} />
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                (+91) 9998901147, (+91) 9033087266
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <LocationOn sx={{ mr: 1, color: 'secondary.main', mt: 0.5 }} />
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                S-3, First Floor, Raj Complex,<br />
                Opp. Seventh-day School,<br />
                Haripura, Maninagar (East),<br />
                Ahmedabad, Gujarat - 380008
              </Typography>
            </Box>
          </Grid>

          {/* Business Hours */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Business Hours
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: "14px" }}>
              <strong>Monday - Saturday :</strong><br />
              10:00 AM - 8:00 PM
            </Typography>
            {/* <Typography variant="body1" paragraph>
              <strong>Saturday:</strong><br />
              9:00 AM - 2:00 PM
            </Typography> */}
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              <strong>Sunday:</strong> Closed
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton 
                href="https://www.facebook.com/share/1Eq4CtjJ6Z/" 
                target="_blank" 
                rel="noopener"
                sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                href="https://www.instagram.com/bharatsonkusare/" 
                target="_blank" 
                rel="noopener"
                sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />

        <Typography 
          variant="body2" 
          align="center"
          sx={{ opacity: 0.8 }}
        >
          &copy; {new Date().getFullYear()} Shree Radhe Services. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;