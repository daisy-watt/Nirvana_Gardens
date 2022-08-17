import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from '@mui/material/';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from './components/AppBar/ResponsiveAppBar';
import BottomBar from './components/BottomBar/BottomBar';
import Image from "./components/asset/Sunlogowhite.png";
import AdminHome from "./components/AdminHome/AdminHome.js";
import AboutPage from './components/AboutPage/AboutPage';
import Services from './components/Services/Services';
import WorkPosts from './components/WorkPosts/WorkPosts';

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#01652F',
            },
            backgroundcolor: '#01652F',
            background:
            {
                default: '#01652F'
            }
        },

        typography: {
            fontFamily: 'Roboto',
        },

    });

console.log(theme)

const App = () => {

     const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    return (
        <CssBaseline>
         <ThemeProvider theme={theme} >
            <Router>
                <ResponsiveAppBar></ResponsiveAppBar>

                <Routes>
                    <Route path="/" element={
                        <Stack direction="row" justifyContent="center" alignItems="center" height="100%" marginTop="40px">
                            <CardMedia
                                component="img"
                                alt="logo"
                                src={Image}
                                sx={{ bgcolor: '#01652F', width: '300px', height: '300px', animation: "spin 10s linear infinite"}}
                            />
                        </Stack>
                    } />
                </Routes>
            
                <Routes>
                    <Route path="/" element={<BottomBar text="Jordans admin panel"/>} />
                    <Route path="admin" element={<AdminHome />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<Services/>} />
                    <Route path="work" element={<WorkPosts />} />

                </Routes>
                
            </Router>
         </ThemeProvider>
        </CssBaseline>

    )

}

export default App;