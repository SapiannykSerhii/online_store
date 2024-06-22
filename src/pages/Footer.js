import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#4D4D56',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        minWidth: '100vw',
        padding: '16px 0'
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Your Online Shop
      </Typography>
      <Typography variant="body2" mt={1}>
        Made with ❤️ by <Link href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Serhii Sapiannyk</Link>
      </Typography>
    </Box>
  );
};

export default Footer;