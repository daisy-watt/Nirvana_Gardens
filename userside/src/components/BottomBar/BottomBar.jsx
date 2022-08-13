import React from 'react';
import ReactDOM from 'react-dom';
import Stack from "@mui/material/Stack"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom"
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";


export default function BottomBar(props) {


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Link to="/admin">
            <Button variant="contained" size="small" onClick={props.onFinished}>
              {props.text}
              </Button>   
            </Link>         
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
