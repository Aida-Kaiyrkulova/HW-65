import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Services: React.FC = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Comprehensive cleaning for your home, ensuring every corner shines.",
    },
    {
      title: "Commercial Cleaning",
      description:
        "Professional cleaning solutions for offices and businesses.",
    },
    {
      title: "Carpet Cleaning",
      description:
        "Deep cleaning to remove stains and allergens from your carpets.",
    },
    {
      title: "Window Cleaning",
      description: "Streak-free window cleaning for a crystal-clear view.",
    },
    {
      title: "Move-In/Move-Out Cleaning",
      description:
        "Special cleaning services to help you transition to your new space.",
    },
  ];

  return (
    <Container sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        At Sparkle Cleaners, we offer a variety of cleaning services to meet
        your needs, including:
      </Typography>
      <List>
        {services.map((service, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${index + 1}. ${service.title}`}
              secondary={service.description}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Services;
