import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import Container from '@mui/material/Container';
import Stack from "@mui/material/Stack"
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ResponsiveAppBar from './components/AppBar/ResponsiveAppBar';
import Home from "./components/Home";

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
    return (
         <ThemeProvider theme={theme}>
            <ResponsiveAppBar></ResponsiveAppBar>
                <Container maxWidth="100%" sx={{ bgcolor: '#01652F', height: '100vh' }}>
                    <Home />
                </Container>
         </ThemeProvider>

    )

}

export default App;