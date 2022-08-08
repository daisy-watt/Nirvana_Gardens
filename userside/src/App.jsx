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
import AdminHome from "./components/AdminHome/AdminHome.js";
import AboutPage from './components/AboutPage/AboutPage';

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
            <Router>
                <ResponsiveAppBar></ResponsiveAppBar>

                <Routes>
                    <Route path="/" element={
                        <Stack direction="column">
                        <Container maxWidth="100%" sx={{height: '100vh'}}>
                            <CardMedia
                                component="img"
                                alt="logo"
                                src={Image}/>
                        </Container>
                        </Stack>
                    } />
                </Routes>
            
                <Routes>
                    <Route path="/" element={<BottomBar text="Jordans admin panel"/>} />
                    <Route path="admin-panel" element={<AdminHome />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<p>Services </p>} />
                    <Route path="portfolio" element={<p>portfolio </p>} />
                </Routes>
            </Router>
         </ThemeProvider>

    )

}

export default App;