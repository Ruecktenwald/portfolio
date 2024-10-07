import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, Box, Typography } from '@mui/material';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

function Sidebar({ isDrawerOpen, toggleDrawer }) {
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={{
        '& .MuiDrawer-paper': {
          width: '200px',
          backgroundColor: '#f5f5f5',
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
