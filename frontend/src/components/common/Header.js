import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context
import '../../styles/Header.css';

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext); // Get toggleTheme function and theme from context

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: theme === 'dark' ? '#424242' : '#fff', // Dynamic background based on theme
        color: theme === 'dark' ? '#ffffff' : '#000000', // Dynamic text color
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="home" smooth duration={500} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
            MyBrand
          </Link>
        </Typography>

        {/* Call to Action Button - Linking to Contact Us */}
        <Button
          variant="contained"
          color="primary"
          sx={{ ml: 2 }}
          component={Link}
          to="contact"
          smooth
          duration={500}
        >
          Contact Us
        </Button>

        {/* Theme Toggle Button */}
        <Button
          variant="outlined"
          sx={{ ml: 2, borderColor: theme === 'dark' ? '#ffffff' : '#6200ea', color: theme === 'dark' ? '#ffffff' : '#6200ea' }} // Styling based on theme
          onClick={toggleTheme} // Call the toggle function
        >
          Toggle Theme
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
