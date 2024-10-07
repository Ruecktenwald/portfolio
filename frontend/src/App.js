import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import CaseStudies from './components/CaseStudies'; // Using only CaseStudies.js
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
          backgroundColor: 'rgba(255, 255, 255, 0.0)', // White with 80% opacity
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar for Projects / Case Studies */}
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Main Sections */}
      <div>
        <section id="home">
          <Home />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="case-studies">
          <CaseStudies />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <ContactUs />
        </section>
      </div>

      {/* Footer Component */}
      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5f5f5', marginTop: '50px' }}>
        <p>© 2024 MyBrand - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
