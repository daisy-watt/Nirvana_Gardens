import React from 'react';
import ReactDOM from 'react-dom';
import Stack from "@mui/material/Stack"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
          <Button variant="contained" size="small" onClick={props.onFinished}>
            {props.text}
            </Button>            
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
