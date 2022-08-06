import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Stack from "@mui/material/Stack"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hyebitches from './hyebitches';
import Footer from './footer';
import MediaCard from './ResponsiveAppBar';
import Spininglogo from './spininglogo';
import ResponsiveAppBar from './ResponsiveAppBar';
import About from './about';
import Services from './services';
import Contact from './contact';

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

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
//   );

// root.render(
//     <React.StrictMode>
//       <Router>
//         <App />
//       </Router>
//     </React.StrictMode>
//   );

export default function App(){
    return (
//         <BrowserRouter>
//         <Routes>
//           <Route path="/"> //I think this line of code is doing something because we don't have a layout or pages directory
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="services" element={<Services />} />
//             <Route path="contact" element={<Contact />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     );
    //Idk why the code below is 'unreachable' if the code above is live
    //(
        <ThemeProvider theme={theme}>
            <ResponsiveAppBar></ResponsiveAppBar>
        </ThemeProvider>
    )
}