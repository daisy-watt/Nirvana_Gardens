import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../PostList";
import PostForm from "../PostForm";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getPosts } from "../../actions/posts"


const theme = createTheme(
    {
        palette: {
            background: {
                default: '#01652F'
            },

            primary: {
                main: '#01652F',
            },
        },
        typography: {
            fontFamily: 'Roboto',
        }

    });

console.log(theme)



const AdminHome = () => {
    const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [code, setCode] = React.useState('');
    const [LastRefreshTime, setLastRefreshTime] = React.useState(Date.now())

    const onFormSubmitted = () => {
    console.log('form was submitted');
    setLastRefreshTime(Date.now())
    }

        // useEffect(() => {
        //     dispatch(getPosts());
        // }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Container color="inherit">
            <Box color="inherit" />
                    {
                        isLoggedIn
                        ? (
                            <Stack direction="row" color="common.white" spacing={2}>
                                <PostForm onSubmitted={onFormSubmitted} />
                                <PostList isLoggedIn={isLoggedIn} LastRefreshTime={LastRefreshTime}/>
                            </Stack>
                        )
                        : (
                            <Stack direction="column" alignItems="center">
                                <TextField value={code} onChange={(event)=>{setCode(event.target.value)}}/>
                                <Button variant="contained" onClick={
                                    async ()=>
                                    {
                                        const data = {
                                            "code": code,
                                          };
                                      
                                          const res = await fetch('http://localhost:5002/api/isCorrectCode', {
                                            method: 'POST',
                                            body: JSON.stringify(data),
                                            headers: {
                                              'Content-Type': 'application/json'
                                            }
                                          });

                                          const resJSON = await res.json()
                                          console.log(resJSON)

                                          setIsLoggedIn(resJSON.isCorrectCode)
                                    }
                                }> magic number</Button>
                            </Stack>
                        )
                    }  
            </Container>

        </ThemeProvider>
    )
}

export default AdminHome;