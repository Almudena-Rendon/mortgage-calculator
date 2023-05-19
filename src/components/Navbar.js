import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SavingsIcon from "@mui/icons-material/Savings";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <SavingsIcon fontSize="large"/>
          <Typography variant="h5" m={1} component="div" sx={{ flexGrow: 1 }}>
            Your Bank
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
