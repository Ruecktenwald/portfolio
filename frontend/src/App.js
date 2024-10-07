import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import Testimonials from './components/pages/Testimonials'; 
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Sidebar Toggle Button */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          top: '75px',
          right: '20px',
          zIndex: 1300,
          backgroundColor: 'rgba(255, 255, 255, 0.0)',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar */}
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Main Sections */}
      <div style={{ paddingTop: '0px' }}> {/* Adjust for the fixed header height */}
        <section id="home" ><Home /></section>
        <section id="services"><Services /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><ContactUs /></section>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
