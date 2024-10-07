import React, { useContext } from 'react';
import Layout from '../layout/Layout'; // Importing the shared Layout component
import { Card, CardContent, Typography, Box, Button } from '@mui/material'; // Import Button
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context
import { Link } from 'react-scroll'; // Import Link for smooth scrolling
import '../../styles/Testimonials.css'; // Importing the CSS styles

function Testimonials() {
  const { theme } = useContext(ThemeContext); // Access current theme

  const testimonials = [
    { name: "John Doe", feedback: "Amazing service, highly recommend!" },
    { name: "Jane Smith", feedback: "Professional and efficient, great results." },
    { name: "Alice Johnson", feedback: "Exceeded our expectations, fantastic work!" },
    { name: "Michael Brown", feedback: "Top-notch web development, very satisfied." },
  ];

  return (
    <Layout title="Testimonials">
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // Two columns on larger screens
        gap: 2,
        padding: '40px',
      }}>
        {testimonials.map((testimonial, index) => (
          <Card key={index} sx={{
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: theme === 'dark' ? '#424242' : '#fff', // Theme-based background
            transition: 'transform 0.3s', // Smooth transition
            '&:hover': {
              transform: 'scale(1.05)', // Scale effect on hover
            },
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: theme === 'dark' ? '#bb86fc' : '#6200ea' }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body1" sx={{ color: theme === 'dark' ? '#fff' : '#333', marginBottom: 2 }}>
                "{testimonial.feedback}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      {/* New Section for Get in Touch */}
      <Box sx={{ textAlign: 'center', marginTop: '40px', padding: '20px' }}>
        <Typography variant="h5" sx={{ color: theme === 'dark' ? '#bb86fc' : '#6200ea' }}>
          Get in Touch
        </Typography>
        <Button
          variant="outlined"
          sx={{ marginTop: '20px' }}
          component={Link}
          to="contact"
          smooth
          duration={500}
        >
          Contact Us
        </Button>
      </Box>
    </Layout>
  );
}

export default Testimonials;
