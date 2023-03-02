import * as React from "react";
import { Link } from "react-router-dom";

//mui components
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#7E57C2" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
