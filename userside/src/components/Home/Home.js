import React from "react";
import PostList from "../PostList";
import PostForm from "../PostForm";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#01652F',
            },
        },

    });

console.log(theme)



const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Stack direction="row" spacing={2} color="common.white">
                    <PostForm />
                    <PostList />
                </Stack>
            </Container>
        </ThemeProvider>
    )
}

export default Home;