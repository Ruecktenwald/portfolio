import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function Sidebar({ isDrawerOpen, toggleDrawer }) {
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <List>
        <ListItem button onClick={toggleDrawer}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button onClick={toggleDrawer}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
