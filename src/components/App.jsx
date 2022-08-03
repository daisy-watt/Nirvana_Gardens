import React from 'react';
import ReactDOM from 'react-dom';
import Stack from "@mui/material/Stack"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hyebitches from './hyebitches';
import Footer from './footer';
import MediaCard from './ResponsiveAppBar';
import Spininglogo from './spininglogo';
import ResponsiveAppBar from './ResponsiveAppBar';


const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#01652F',
            },
            secondary: {
                main: '#f5f2e3',
            },
        },

    });

console.log(theme)

export default function App(){
    return (
        <ThemeProvider theme={theme}>
            <ResponsiveAppBar></ResponsiveAppBar>
        </ThemeProvider>
    )
}