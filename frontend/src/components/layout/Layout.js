import React from 'react';
import { Box, Typography } from '@mui/material';

function Layout({ title, children, backgroundColor }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: '50px',
        backgroundColor: backgroundColor || '#fff',  // Default background color
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" component="h1" sx={{ marginBottom: '20px' }}>
        {title}
      </Typography>
      <Box sx={{ maxWidth: '800px', textAlign: 'center' }}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
