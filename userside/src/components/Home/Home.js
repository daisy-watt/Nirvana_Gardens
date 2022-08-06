import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../PostList";
import PostForm from "../PostForm";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getPosts } from "../../actions/posts"


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



const Home = () => {
    const dispatch = useDispatch();

        useEffect(() => {
            dispatch(getPosts());
        }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Stack spacing={2} color="common.white">
                    <PostForm />
                    <PostList />
                </Stack>
            </Container>
        </ThemeProvider>
    )
}

export default Home;