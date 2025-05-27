// components/ContinuousPosterCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  IconButton, 
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
  Typography
} from '@mui/material';
import { 
  ChevronLeft, 
  ChevronRight,
  Circle,
  CircleOutlined
} from '@mui/icons-material';

const ImageCarousel = ({ images }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const containerRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate visible items based on screen size
  useEffect(() => {
    setItemsPerPage(isMobile ? 1 : 3);
  }, [isMobile]);

  // Duplicate items for seamless looping
  const duplicatedItems = [...images, ...images];

  // Handle manual navigation
  const scrollTo = (direction) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || !containerRef.current) return;
    
    const container = containerRef.current;
    const speed = 0.9; // pixels per frame (adjust for speed)
    let animationId;
    let isScrolling = true;

    const animate = () => {
      if (!isScrolling) return;
      
      container.scrollLeft += speed;
      
      // Reset to beginning when reaching the duplicated portion
      if (container.scrollLeft >= (container.scrollWidth / 2)) {
        container.scrollLeft = 0;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isScrolling = false;
      cancelAnimationFrame(animationId);
    };
  }, [itemsPerPage, isPaused]);

  return (
    <Box sx={{ 
      position: 'relative',
      width: '100%',
      maxWidth: '1200px',
      margin: '2rem auto',
      px: 2,
      overflow: 'hidden'
    }}>
      {/* Cards Container with Auto-Scroll */}
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          gap: '24px',
          height: '500px',
          alignItems: 'center',
          overflowX: 'auto',
          scrollbarWidth: 'none', // Hide scrollbar
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '&:hover': {
            animationPlayState: isPaused ? 'paused' : 'running'
          }
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedItems.map((img, index) => (
          <Card 
            key={`${index}-${img}`}
            sx={{
              minWidth: isMobile ? '300px' : '280px',
              height: '450px',
              borderRadius: '12px',
              boxShadow: 3,
              flexShrink: 0,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.03)'
              },
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <CardMedia
              component="img"
              image={img}
              alt={`Poster ${index + 1}`}
              sx={{
                height: '100%',
                objectFit: 'cover',
                flexGrow: 1
              }}
            />
          </Card>
        ))}
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={() => scrollTo('left')}
        size="large"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          zIndex: 2,
        }}
      >
        <ChevronLeft fontSize="large" />
      </IconButton>

      <IconButton
        onClick={() => scrollTo('right')}
        size="large"
        sx={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          zIndex: 2,
        }}
      >
        <ChevronRight fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;