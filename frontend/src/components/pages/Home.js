import React, { useContext } from 'react';
import Layout from '../layout/Layout'; // Importing the shared Layout component
import { Button, Typography } from '@mui/material';
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
    </Layout>
  );
}

export default Home;
