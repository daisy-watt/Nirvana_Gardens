import React from 'react';
import ReactDOM from 'react-dom';
import Stack from "@mui/material/Stack"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {default as MLink} from "@mui/material/Link";
import {Link} from "react-router-dom"
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function BottomBar(props) {


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
          
      
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
            <MLink target="_blank" href='http://www.google.com'>
              <Button variant="outlined" size="large" startIcon={<InstagramIcon/>} sx={{ color: "white"}}>
              </Button>
            </MLink>
          <Link to="/admin">
            <Button variant="outlined" size="small"  onClick={props.onFinished} sx={{ color: "white"}}>
              {props.text}
              </Button>   
            </Link>
                   
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
