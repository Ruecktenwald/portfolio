import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, Typography, Box, Slide } from '@mui/material';

function Sidebar({ isDrawerOpen, toggleDrawer }) {
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      TransitionComponent={Slide}
      transitionDuration={450} // Customize the duration
      sx={{
        '& .MuiDrawer-paper': {
          width: '250px', // Drawer width
          backgroundColor: '#f5f5f5', // Subtle background for a professional look
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Add a light shadow for depth
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        {/* Sidebar Header */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Menu
        </Typography>

        <Divider />

        {/* Navigation List */}
        <List>
          <ListItem button onClick={toggleDrawer} sx={{ '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                fontSize: '16px',
                fontWeight: 'medium',
                letterSpacing: 0.5,
              }}
            />
          </ListItem>
          <ListItem button onClick={toggleDrawer} sx={{ '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <ListItemText
              primary="About"
              primaryTypographyProps={{
                fontSize: '16px',
                fontWeight: 'medium',
                letterSpacing: 0.5,
              }}
            />
          </ListItem>
          <ListItem button onClick={toggleDrawer} sx={{ '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <ListItemText
              primary="Contact"
              primaryTypographyProps={{
                fontSize: '16px',
                fontWeight: 'medium',
                letterSpacing: 0.5,
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
