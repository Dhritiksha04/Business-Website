import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/SRS_logo.jpeg';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Location', href: '#location' },
    { name: 'Contact Us', href: '#contact', isButton: true }
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  color: theme.palette.secondary.main,
                  backgroundColor: 'transparent'
                }
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      boxShadow: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo - visible on all screens */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#home"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            <img
              src={logo}
              alt="Shree radhe services"
              style={{
                height: isMobile ? '40px' : '60px',
                marginRight: '10px'
              }}
            />
          </Typography>

          {/* Desktop Navigation - hidden on mobile */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' }, 
            justifyContent: 'center',
            ml: 4
          }}>
            {navItems.filter(item => !item.isButton).map((item) => (
              <Button
                key={item.name}
                href={item.href}
                sx={{
                  my: 2,
                  color: 'primary.main',
                  mx: 1,
                  fontSize: '1rem',
                  '&:hover': {
                    color: 'secondary.main',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Contact Button - hidden on mobile */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            ml: 2
          }}>
            <Button
              variant="contained"
              color="secondary"
              href="#contact"
              sx={{
                borderRadius: '50px',
                boxShadow: '0 4px 20px rgba(74, 20, 140, 0.3)',
                px: 3
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Mobile Menu Button - hidden on desktop */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center'
          }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="primary"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;