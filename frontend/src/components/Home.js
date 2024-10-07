import React from 'react';
import Layout from './Layout'; // Importing the shared Layout component
import { Button } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import Services from './Services'; // Import Services component
import Testimonials from './Testimonials'; // Import Testimonials component
import ContactUs from './ContactUs'; // Import ContactUs component
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling


function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Layout title="Professional Web Development Services" backgroundColor="#f5f5f5">
        <p>Delivering cutting-edge web solutions for your business needs.</p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{ marginTop: '20px', padding: '10px 20px' }}
          component={Link}
          to="contact"
          smooth
          duration={500}
        >
          Get Started
        </Button>
      </Layout>
    </div>
  );
}

export default Home;
