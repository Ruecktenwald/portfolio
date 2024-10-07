import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Layout from '../layout/Layout'; // Using shared Layout component

function Services() {
  const services = [
    { title: 'Web Development', description: 'Building responsive and functional websites.' },
    { title: 'API Integration', description: 'Seamless API integration for your business needs.' },
    { title: 'SEO Optimization', description: 'Improve your search engine ranking.' },
    { title: 'UI/UX Design', description: 'Creating beautiful and user-friendly designs.' },
    // Add more services as needed
  ];

  return (
    <Layout title="Our Services" backgroundColor="#f5f5f5">
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // Two columns on larger screens
        gap: 2,
        padding: '40px',
      }}>
        {services.map((service, index) => (
          <Card key={index} sx={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                {service.title}
              </Typography>
              <Typography variant="body1">
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
