import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Layout from './Layout';

function Testimonials() {
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    autoplay: autoplay,
    autoplaySpeed: 2000, // Adjust the speed as needed
    pauseOnHover: true, // Pause on hover
    beforeChange: () => setAutoplay(true), // Restart autoplay when changing slides
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
    <Layout title="Testimonials" backgroundColor="#f0f0f0">
      <Box sx={{ width: '100%', padding: '40px 0' }}>
        <Slider ref={sliderRef} {...settings} onClick={() => setAutoplay(!autoplay)}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} sx={{ margin: '0px', minHeight: '200px' }}>
              <CardContent>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  "{testimonial.feedback}"
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
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
