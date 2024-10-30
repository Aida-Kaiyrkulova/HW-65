import React from "react";
import { Box, Typography } from "@mui/material";

const Contacts: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        We would love to hear from you! For inquiries or to schedule a cleaning
        service, please reach out to us:
      </Typography>
      <Typography>
        - <strong>Email</strong>: contact@sparklecleaners.com
        <br />- <strong>Phone</strong>: (123) 456-7890
        <br />- <strong>Address</strong>: 123 Clean St, Springfield, IL
      </Typography>
    </Box>
  );
};

export default Contacts;
