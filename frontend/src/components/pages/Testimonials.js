import React, { useRef, useState, useContext } from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Layout from '../layout/Layout';
import { ThemeContext } from '../../context/ThemeContext'; // Import Theme Context
import '../../styles/Testimonials.css';

function Testimonials() {
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);
  const { theme } = useContext(ThemeContext); // Access current theme

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: () => setAutoplay(true),
  };

  const testimonials = [
    { name: "John Doe", feedback: "Amazing service, highly recommend!" },
    { name: "Jane Smith", feedback: "Professional and efficient, great results." },
    { name: "Alice Johnson", feedback: "Exceeded our expectations, fantastic work!" },
    { name: "Michael Brown", feedback: "Top-notch web development, very satisfied." },
    { name: "Emily Davis", feedback: "The team is very responsive and talented." },
    { name: "Daniel Wilson", feedback: "Creative solutions and outstanding results." },
    { name: "Sarah Lee", feedback: "Great attention to detail, loved the experience." },
    { name: "James White", feedback: "I’m extremely happy with the final product." }
  ];

  return (
    <Layout title="Testimonials">
      <Box sx={{ width: '100%', padding: '40px 0', textAlign: 'center' }}>
        <Slider ref={sliderRef} {...settings} onClick={() => setAutoplay(!autoplay)}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} sx={{
              margin: '0px',
              minHeight: '200px',
              backgroundColor: theme === 'dark' ? '#424242' : '#fff', // Theme-based background
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)', // Scale effect on hover
              },
            }}>
              <CardContent>
                <Typography variant="body1" sx={{
                  fontStyle: 'italic',
                  color: theme === 'dark' ? '#bb86fc' : '#333' // Theme-based text color
                }}>
                  "{testimonial.feedback}"
                </Typography>
                <Typography variant="h6" sx={{
                  fontWeight: 'bold',
                  marginTop: '10px',
                  color: theme === 'dark' ? '#fff' : '#6200ea' // Theme-based name color
                }}>
                  {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </Layout>
  );
}

export default Testimonials;
