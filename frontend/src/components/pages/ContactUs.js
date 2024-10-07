import React, { useState, useContext } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Layout from '../layout/Layout'; // Using the shared Layout component
import '../../styles/ContactUs.css';
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context

function Contact() {
  const { theme } = useContext(ThemeContext); // Access current theme
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false); // State to handle success message

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Email:', email);
    console.log('Message:', message);
    
    // Simulate successful submission
    setSuccess(true);

    // Clear the form
    setEmail('');
    setMessage('');
  };

  return (
    <Layout title="Contact Us">
      <Box sx={{ maxWidth: 600, mx: 'auto', p: 3, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4, color: theme === 'dark' ? '#bb86fc' : '#6200ea' }}>
          Get in Touch
        </Typography>
        
        {success && (
          <Typography variant="body1" sx={{ mb: 2, color: 'green' }}>
            Your message has been sent successfully!
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              mb: 2,
              backgroundColor: theme === 'dark' ? '#424242' : '#fff',
              color: theme === 'dark' ? '#fff' : '#000',
            }}
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
            sx={{
              mb: 2,
              backgroundColor: theme === 'dark' ? '#424242' : '#fff',
              color: theme === 'dark' ? '#fff' : '#000',
            }}
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
