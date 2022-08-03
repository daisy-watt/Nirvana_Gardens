import React from 'react';
import ReactDOM from 'react-dom';
import Stack from "@mui/material/Stack"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hyebitches from './hyebitches';
import Footer from './footer';
import MediaCard from './mediaCard';
import Spininglogo from './spininglogo';
import Image from './asset/Nirvana_Gardens_Sunlogo.jpg';



const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#212121',
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
            <Stack direction="column">
                <MediaCard></MediaCard>
                <Spininglogo></Spininglogo>
                <Hyebitches></Hyebitches>
                <Footer></Footer>
            </Stack>
        </ThemeProvider>
    )
}