import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';


import { Link } from "react-router-dom";
import CartSummary from "../components/cartSummary";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#4D4D56", minWidth: "100vw" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          component={Link}
          to="/"
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{ marginLeft: "-12px" }}
        >
          <HomeIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
          Online Shop
        </Typography>

        <CartSummary />

        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          sx={{ marginRight: "-12px" }}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;