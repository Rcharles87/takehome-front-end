import React, { useState } from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Menu, MenuItem, Tooltip, Typography } from "@mui/material";

const navigation = ["Pizzas", "Sides", "Breads"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.target);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="NavBar">
      <AppBar sx={{backgroundColor: "#191970"}}>
        <Container maxWidth="xl" >
          <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
            <div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: {  md: 'flex' }, 
              padding: 0.5 
            }}
          >
            <img src="../Assets/logo.webp" alt="logo" />
          </Typography>
            </div>

            <div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
                <MenuIcon fontSize="large" sx={{color: "#fff"}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {navigation.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography component="a" href="/" textAlign="center" sx={{textDecoration:"none", color: "black"}} >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

            </div>
            
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;
