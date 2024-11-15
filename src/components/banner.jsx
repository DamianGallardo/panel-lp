'use client'
import React from 'react'
import { Box, Container, Typography } from '@mui/material';
// import { AnimatedText } from './AnimatedText';
import { useState, useEffect } from 'react';


export default function Banner({ img, title }) {
    const [offsetY, setOffsetY] = useState(0);
  
    // Handle the scroll event
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Limit the maximum background movement
    const limitedOffsetY = Math.min(offsetY * 0.1, 50); // Limiting the scroll to 50px
  
    return (
      <>
        <Box
          sx={{
            height: "600px",
            backgroundImage: `url("${img}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center", // Ensure the image is fully centered
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            position: "relative",
            // clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)", // Top and bottom diagonal cuts
            zIndex: 1,
            backgroundAttachment: "fixed", // Parallax effect
            transition: "background-position 0.3s ease-out", // Smooth movement
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <Typography
              sx={{
                fontWeight: 700,
                letterSpacing: "0.1em",
                textAlign: "center",
                color: "#fff",
                fontSize: "2.5rem",
                pb: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "uppercase",
                pt: "20px",
              }}
              >
                {/* <AnimatedText text={title} /> */}
                {title}
              </Typography>
            </Box>
          </Container>
        </Box>
      </>
    );
  }

