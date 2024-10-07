import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

// Styled container for animation
const AnimatedButton = styled(IconButton)(({ theme }) => ({
  transition: 'transform 0.3s ease',
}));

function MenuButton({ isDrawerOpen, toggleDrawer }) {
  return (
    <AnimatedButton
      onClick={toggleDrawer}
      sx={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1300, // Ensure it stays on top
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#e0e0e0',
        },
      }}
    >
      {isDrawerOpen ? (
        <CloseIcon sx={{ transition: 'transform 0.3s ease', transform: isDrawerOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      ) : (
        <MenuIcon sx={{ transition: 'transform 0.3s ease', transform: isDrawerOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      )}
    </AnimatedButton>
  );
}

export default MenuButton;
