import React, { useContext } from 'react';
import Layout from '../layout/Layout'; // Importing the shared Layout component
import { Button, Typography, Box } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling
import '../../styles/Home.css'; // Importing the CSS styles

function Home() {
  const { theme } = useContext(ThemeContext); // Access current theme

  return (
    <Layout title="Professional Web Development Services">
      <div className={`hero-section ${theme}`}>
        <Typography variant="h4" sx={{ marginBottom: '20px', color: theme === 'dark' ? '#bb86fc' : '#6200ea' }}>
          Delivering cutting-edge web solutions for your business needs.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{ marginTop: '20px', padding: '10px 20px', transition: 'background-color 0.3s ease' }}
          component={Link}
          to="contact"
          smooth
          duration={500}
          className="get-started-button"
        >
          Get Started
        </Button>
      </div>

      {/* Additional Section at the Bottom */}
      <Box sx={{ marginTop: '40px', padding: '20px', textAlign: 'center', backgroundColor: theme === 'dark' ? '#424242' : '#f0f0f0', borderRadius: '12px' }}>
        <Typography variant="h5" sx={{ color: theme === 'dark' ? '#bb86fc' : '#6200ea', marginBottom: '20px' }}>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" sx={{ color: theme === 'dark' ? '#fff' : '#333', marginBottom: '20px' }}>
          We offer a full range of web development services tailored to your business needs, ensuring quality and customer satisfaction.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          component={Link}
          to="services"
          smooth
          duration={500}
          sx={{ padding: '10px 20px', transition: 'background-color 0.3s ease' }}
        >
          Explore Our Services
        </Button>
      </Box>
    </Layout>
  );
}

export default Home;
