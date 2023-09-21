import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <NavLink style={{ textDecoration: "none", color: "darkgray" }}>
            Contact
          </NavLink>
        </Grid>
        <Grid item xs={4}>
          <NavLink style={{ textDecoration: "none", color: "darkgray" }}>
            Features
          </NavLink>{" "}
        </Grid>
        <Grid item xs={4}>
          <NavLink style={{ textDecoration: "none", color: "darkgray" }}>
            Buy me coffee
          </NavLink>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        sx={{ textAlign: "center", color: "darkgray", marginTop:'1rem' }}
      >
        {year}&copy; Made with '❤️'
      </Typography>
    </Container>
  );
};

export default Footer;
