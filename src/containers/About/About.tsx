import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography>
        Welcome to Sparkle Cleaners! We are a dedicated team of cleaning
        professionals committed to making your spaces spotless. With years of
        experience in the industry, we understand the importance of a clean
        environment, whether it's your home or office. Our mission is to provide
        top-notch cleaning services tailored to your needs. We pride ourselves
        on our attention to detail and customer satisfaction.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Our Story
      </Typography>
      <Typography>
        Sparkle Cleaners was founded in [Year] with the vision of providing
        exceptional cleaning services that prioritize customer needs. Our
        commitment to excellence has helped us grow and serve countless
        satisfied clients.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Why Choose Us?
      </Typography>
      <Typography>
        - Experienced and trained staff
        <br />
        - Eco-friendly cleaning products
        <br />
        - Flexible scheduling to suit your needs
        <br />- Satisfaction guaranteed
      </Typography>
      <Typography variant="h6" gutterBottom>
        What Our Clients Say
      </Typography>
      <Typography>
        "Sparkle Cleaners transformed my home! I couldn't be happier with their
        service." - Happy Customer
      </Typography>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Get in Touch
        </Typography>
        <Typography>
          Contact us today for a free estimate and see how we can help you
          achieve a cleaner, more inviting space!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
