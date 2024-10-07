import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Layout from './Layout'; // Using the shared Layout component

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Email:', email);
    console.log('Message:', message);
    // Clear the form
    setEmail('');
    setMessage('');
  };

  return (
    <Layout title="Contact Us" backgroundColor="#f0f0f0">
      <Box sx={{ maxWidth: 600, mx: 'auto', p: 3, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Get in Touch
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </form>
      </Box>
    </Layout>
  );
}

export default Contact;
