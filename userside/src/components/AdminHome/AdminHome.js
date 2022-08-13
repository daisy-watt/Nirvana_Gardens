import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../PostList";
import PostForm from "../PostForm";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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



const AdminHome = () => {
    const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [code, setCode] = React.useState('');

        // useEffect(() => {
        //     dispatch(getPosts());
        // }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                    {
                        isLoggedIn
                        ? (
                            <Stack direction="row" color="common.white" spacing={2}>
                                <PostForm />
                                <PostList isLoggedIn={isLoggedIn} />
                            </Stack>
                        )
                        : (
                            <Stack>
                                <TextField value={code} onChange={(event)=>{setCode(event.target.value)}}/>
                                <Button onClick={
                                    async ()=>
                                    {
                                        const data = {
                                            "code": code,
                                          };
                                      
                                          const res = await fetch('http://localhost:5001/api/isCorrectCode', {
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
                                }/>
                            </Stack>
                        )
                    }
                    
            </Container>
        </ThemeProvider>
    )
}

export default AdminHome;