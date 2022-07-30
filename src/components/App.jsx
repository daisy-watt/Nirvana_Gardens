import React from 'react';
import ReactDOM from 'react-dom';
import Stack from "@mui/material/Stack"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hyebitches from './hyebitches';



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
            <Stack direction="column" bgcolor={'#f5f2e3'}>
                <Hyebitches></Hyebitches>
            </Stack>
        </ThemeProvider>
    )
}
