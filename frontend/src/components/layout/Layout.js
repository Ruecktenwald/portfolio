import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext'; // Import the Theme Context
import '../../styles/Layout.css'; // Import your CSS styles

function Layout({ title, children }) {
    const { theme } = useContext(ThemeContext); // Access the current theme

    return (
        <Box
            sx={{
                minHeight: '100vh',
                padding: '20px',
                backgroundColor: theme === 'dark' ? '#1e1e2f' : '#f0f0f0', // Adjust background colors for themes
                color: theme === 'dark' ? '#ffffff' : '#333333', // Set text color based on the theme
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for color changes
            }}
        >
            <Typography variant="h2" component="h1" sx={{ marginBottom: '20px', textAlign: 'center' }}>
                {title}
            </Typography>
            <Box sx={{ maxWidth: '800px', textAlign: 'center' }}>
                {children}
            </Box>
        </Box>
    );
}

export default Layout;
