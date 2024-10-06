import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './components/Sidebar';

function App() {
  const [message, setMessage] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // Fetch data from FastAPI backend
    fetch('http://127.0.0.1:8000/')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to toggle the sidebar
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="App">
      {/* AppBar with menu icon */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <h1>{message ? message : 'Loading...'}</h1>
        </Toolbar>
      </AppBar>

      {/* Sidebar Component */}
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Main Content */}
      <div style={{ padding: '20px' }}>
        <h2>Main Content Area</h2>
      </div>
    </div>
  );
}

export default App;
