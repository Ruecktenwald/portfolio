// src/components/common/Footer.js

import React, { useContext } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context
import '../../styles/Footer.css'; // Optional CSS styling

function Footer() {
  const { theme } = useContext(ThemeContext); // Access current theme

  return (
    <Box 
      sx={{
        padding: '20px',
        backgroundColor: theme === 'dark' ? '#424242' : '#f5f5f5', // Change background based on theme
        color: theme === 'dark' ? '#ffffff' : '#000000', // Change text color based on theme
        textAlign: 'center',
        position: 'relative', 
        bottom: 0,
        width: '100%',
        marginTop: 'auto'
      }}
    >
      <Typography variant="body2" color="inherit">
        © {new Date().getFullYear()} MyBrand. All Rights Reserved.
      </Typography>
      <Link href="#privacy-policy" color="inherit">
        Privacy Policy
      </Link>
      <span> | </span>
      <Link href="#terms-of-service" color="inherit">
        Terms of Service
      </Link>
    </Box>
  );
}

export default Footer;
