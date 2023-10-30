import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "rgb(91, 22, 107)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
        <Grid item xs={12} sm={6}>
            <Typography color="white" variant="h5">
              Natwest CreditWise Pro {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid item xs={12} className="social-icons">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a>
            <a href="https://www.twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
            <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
