import React, { useContext } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, Box, Typography } from '@mui/material';
import { Link } from 'react-scroll'; // Importing Link from react-scroll
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context

function Sidebar({ isDrawerOpen, toggleDrawer }) {
  const { theme } = useContext(ThemeContext); // Get current theme

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={{
        '& .MuiDrawer-paper': {
          width: '200px',
          backgroundColor: theme === 'dark' ? '#424242' : '#f5f5f5', // Use theme colors
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          marginTop: '64px', // Adjust to match the height of the header
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Menu
        </Typography>

        <Divider />

        <List>
          <ListItem button onClick={toggleDrawer}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer', width: '100%', textDecoration: 'none', color: 'inherit' }} // Ensure full row is clickable
              aria-label="Navigate to Home" // Accessibility
              onClick={toggleDrawer}
            >
              <ListItemText primary="Home" />
            </Link>
          </ListItem>

          <ListItem button onClick={toggleDrawer}>
            <Link
              to="services"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer', width: '100%', textDecoration: 'none', color: 'inherit' }} // Full row clickable
              aria-label="Navigate to Services" // Accessibility
              onClick={toggleDrawer}
            >
              <ListItemText primary="Services" />
            </Link>
          </ListItem>

          <ListItem button onClick={toggleDrawer}>
            <Link
              to="case-studies"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer', width: '100%', textDecoration: 'none', color: 'inherit' }} // Full row clickable
              aria-label="Navigate to Our Case Studies" // Accessibility
              onClick={toggleDrawer}
            >
              <ListItemText primary="Our Case Studies" />
            </Link>
          </ListItem>

          <ListItem button onClick={toggleDrawer}>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer', width: '100%', textDecoration: 'none', color: 'inherit' }} // Full row clickable
              aria-label="Navigate to Testimonials" // Accessibility
              onClick={toggleDrawer}
            >
              <ListItemText primary="Testimonials" />
            </Link>
          </ListItem>

          <ListItem button onClick={toggleDrawer}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer', width: '100%', textDecoration: 'none', color: 'inherit' }} // Full row clickable
              aria-label="Navigate to Contact Us" // Accessibility
              onClick={toggleDrawer}
            >
              <ListItemText primary="Contact Us" />
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
