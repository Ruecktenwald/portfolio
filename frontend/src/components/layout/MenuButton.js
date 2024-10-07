import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context

// Styled container for animation
const AnimatedButton = styled(IconButton)(({ theme }) => ({
  transition: 'transform 0.3s ease, background-color 0.3s ease',
}));

function MenuButton({ isDrawerOpen, toggleDrawer }) {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <AnimatedButton
      onClick={toggleDrawer}
      sx={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1300, // Ensure it stays on top
        backgroundColor: theme === 'dark' ? '#424242' : '#fff', // Use theme colors
        '&:hover': {
          backgroundColor: theme === 'dark' ? '#616161' : '#e0e0e0',
        },
      }}
      aria-label={isDrawerOpen ? "Close menu" : "Open menu"} // Accessibility
    >
      {isDrawerOpen ? (
        <CloseIcon sx={{ transition: 'transform 0.3s ease', transform: 'rotate(180deg)' }} />
      ) : (
        <MenuIcon sx={{ transition: 'transform 0.3s ease', transform: 'rotate(0deg)' }} />
      )}
    </AnimatedButton>
  );
}

export default MenuButton;
