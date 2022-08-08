import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Image from "../asset/NirvanaGardensSunlogo.jpg";
import {Link} from "react-router-dom";
// import About from './about';
// import Services from './services';
// import Contact from './contact';

const pages = ["About", "Services", "Contact"];
//const pages = [<a href="./about">About</a>, <a href="./services">Services</a>, <a href="./contact">Contact</a>];
const settings = ["Home"];
//const settings = [<a href=".. or root"></a>]

const ResponsiveAppBar = () => {

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Avatar alt="NG" src={Image} sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}/>
        
          <Link to="/">
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                    color: "inherit",
                    textDecoration: "none"
                  }}
                >
                  Nirvana Gardens
                </Typography>
              </Button> 
            </Link> 
          <Box sx={{ flexGrow: 1, color: "white", display: { xs: "flex", md: "none" } }}>
            <Link to="/">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Link>
          </Box>
      
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Nirvana Gardens
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/about">
              <Button
                sx={{ my: 2, color: "white", display: "block" }}>
                ABOUT
              </Button> 
            </Link> 
            <Link to="/services">
              <Button
                sx={{ my: 2, color: "white", display: "block" }}>
                SERVICES
              </Button> 
            </Link> 
            <Link to="/portfolio">
              <Button
                sx={{ my: 2, color: "white", display: "block" }}>
                PORTFOLIO
              </Button> 
            </Link> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;