import React from 'react';
import { useDispatch } from "react-redux";
import { createPosts } from '../../actions/posts';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import FileBase64 from "react-file-base64";

import Image from '../asset/Sunlogo.jpg';

function PostForm(props) {
  const dispatch = useDispatch();

  
    const [title, setTitle] = React.useState('');
    const [image, setImage] = React.useState('');
    const [caption, setCaption] = React.useState('');

  const onSubmit = async () => {

    const data = {
      "title": title,
      "image": image,
      "caption": caption
    };

    const res = await fetch('http://localhost:5002/api/createPost', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setTitle('');
    setImage('');
    setCaption('');

    props.onSubmitted();
  }

  return (
    <Typography variant="h6" component="div" >
      <Stack direction="column" alignItems="center">
        <Card>
          <CardMedia
            component="img"
            alt="garden"
            height="400vh"
            src={Image}/>
          <CardActions >
          <Box
            // form={form}
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50vh' },}}
            noValidate
            autoComplete="off"
            >
            <Stack alignItems="center">
              <TextField id="standard-basic" label="write a title" value={title} onChange={
                (event) => {
                    setTitle(event.target.value);
                }
              }/>
              <Button aria-label="upload picture" component="label" startIcon={<PhotoCamera />} > 
                <FileBase64 
                  type="file"
                  multiple={false} 
                  onDone={(e) => {
                      setImage(e.base64)
                  }}
                />
              </Button>
              <TextField id="outlined-multiline-flexible" label="here is where you can write about anything you like" 
                  rows={6} 
                  multiline 
                  variant="outlined"
                  value={caption}
                  onChange={
                    (event) => {
                      setCaption(event.target.value)
                    }
                  } />
              <Button endIcon={<SendIcon />} onClick={onSubmit}>
                share post
              </Button>
            </Stack> 
          </Box>
          </CardActions>
        </Card>
    </Stack>
  </Typography>

  )
}

export default PostForm;