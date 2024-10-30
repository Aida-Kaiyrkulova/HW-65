import React from "react";
import { Container, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default About;
