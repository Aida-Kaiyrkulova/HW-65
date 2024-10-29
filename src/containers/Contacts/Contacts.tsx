import React from 'react';
import { Container, Typography } from '@mui/material';

const Contacts: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Typography>
        We would love to hear from you! For inquiries or to schedule a cleaning service, please reach out to us:
      </Typography>
      <Typography>
        - <strong>Email</strong>: contact@sparklecleaners.com<br />
        - <strong>Phone</strong>: (123) 456-7890<br />
        - <strong>Address</strong>: 123 Clean St, Springfield, IL
      </Typography>
    </Container>
  );
};

export default Contacts;
