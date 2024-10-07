import React, { useContext } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Layout from '../layout/Layout'; // Using shared Layout component
import '../../styles/Services.css';
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context

function Services() {
  const { theme } = useContext(ThemeContext); // Access current theme

  const services = [
    { title: 'Web Development', description: 'Building responsive and functional websites.' },
    { title: 'API Integration', description: 'Seamless API integration for your business needs.' },
    { title: 'SEO Optimization', description: 'Improve your search engine ranking.' },
    { title: 'UI/UX Design', description: 'Creating beautiful and user-friendly designs.' },
  ];

  return (
    <Layout title="Our Services">
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // Two columns on larger screens
        gap: 2,
        padding: '40px',
      }}>
        {services.map((service, index) => (
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
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', color: theme === 'dark' ? '#bb86fc' : '#6200ea' }}>
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: theme === 'dark' ? '#fff' : '#333' }}>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Layout>
  );
}

export default Services;
