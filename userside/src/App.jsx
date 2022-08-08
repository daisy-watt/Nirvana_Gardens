import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from './components/AppBar/ResponsiveAppBar';
import BottomBar from './components/BottomBar/BottomBar';
import Image from "./components/asset/NirvanaGardensSunlogo.jpg";
import Home from "./components/Home/Home.js";

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#01652F',
            },
        },
        typography: {
            fontFamily: 'Roboto',
        }

    });

console.log(theme)

const App = () => {

     const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    return (
         <ThemeProvider theme={theme}>
            <ResponsiveAppBar></ResponsiveAppBar>
                <Stack direction="column">
                    <Container maxWidth="100%" sx={{height: '100vh'}}>
                        <CardMedia
                            component="img"
                            alt="logo"
                            src={Image}/>
                    </Container>
                </Stack>
                {
    
                    isAuthenticated
                    ? <Home />
                    : <BottomBar text="hi!" onFinished={()=>{setIsAuthenticated(true)}}/>
                }
         </ThemeProvider>

    )

}

export default App;