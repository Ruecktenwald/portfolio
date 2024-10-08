import React, { useState, useContext } from 'react';
import { Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Layout from '../layout/Layout'; // Using the shared Layout component
import '../../styles/ContactUs.css';
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context

function Contact() {
  const { theme } = useContext(ThemeContext); // Access current theme
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [serviceInterest, setServiceInterest] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectDuration, setProjectDuration] = useState('');
  const [success, setSuccess] = useState(false); // State to handle success message

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Company Name:', companyName);
    console.log('Service Interest:', serviceInterest);
    console.log('Project Description:', projectDescription);
    console.log('Project Duration:', projectDuration);
    setSuccess(true);
    setEmail('');
    setCompanyName('');
    setServiceInterest('');
    setProjectDescription('');
    setProjectDuration('');
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
            label="Your Email *"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                '& fieldset': {
                  borderColor: theme === 'dark' ? '#bb86fc' : '#6200ea', // Outline color
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Company Name *"
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                '& fieldset': {
                  borderColor: theme === 'dark' ? '#bb86fc' : '#6200ea', // Outline color
                },
              },
            }}
          />
          <FormControl fullWidth required sx={{ mb: 2 }}>
            <TextField
            select
            label='Select Service'
              value={serviceInterest}
              onChange={(e) => setServiceInterest(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
            >
              <MenuItem value="">
                <em>Select a Service</em>
              </MenuItem>
              <MenuItem value="web-development">Web Development</MenuItem>
              <MenuItem value="api-integration">API Integration</MenuItem>
              <MenuItem value="seo-optimization">SEO Optimization</MenuItem>
              <MenuItem value="ui-ux-design">UI/UX Design</MenuItem>
            </TextField>
          </FormControl>
          <TextField
            fullWidth
            label="Project Description (optional)"
            variant="outlined"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            multiline
            rows={4}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
          />
          {/* Project Duration Selection */}
          <FormControl fullWidth required sx={{ mb: 2 }}>
            <TextField
            select
            label='Select Duration'
              value={projectDuration}
              onChange={(e) => setProjectDuration(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
            >
              <MenuItem value="">
                
              </MenuItem>
              <MenuItem value="less-than-a-month">Less than a month</MenuItem>
              <MenuItem value="1-3-months">1-3 months</MenuItem>
              <MenuItem value="3-6-months">3-6 months</MenuItem>
              <MenuItem value="6-plus-months">6+ months</MenuItem>
            </TextField>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </form>
      </Box>
    </Layout>
  );
}

export default Contact;
