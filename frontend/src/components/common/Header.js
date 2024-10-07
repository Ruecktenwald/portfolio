import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling

function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
