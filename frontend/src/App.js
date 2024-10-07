import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MenuButton from './components/MenuButton';  // Import the new MenuButton component

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="App">
      {/* Use the MenuButton */}
      <MenuButton isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Sidebar Component */}
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Main content */}
      <div style={{ padding: '20px' }}>
        <h1>Welcome to the App</h1>
      </div>
    </div>
  );
}

export default App;
