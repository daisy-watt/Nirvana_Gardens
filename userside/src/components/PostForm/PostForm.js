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

function PostForm() {
  const dispatch = useDispatch();
  // const [form] = Form.useForm();

    // title: { type: String, required: true },
    // image: { type: String, required: true },
    // caption: { type: String, required: true },
    // postDate: { type: Date, default: new Date() },
  

  const onSubmit = async () => {

    const data = {
      "title": "Post from user",
      "image": "dsflkjhglskjfhdglk",
      "caption": "fuck my life"
    };

    const res = await fetch('http://localhost:5001/api/createPost', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res)
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
              <TextField id="standard-basic" label="write a title" />
              <Button aria-label="upload picture" component="label" startIcon={<PhotoCamera />} >attach 
                <FileBase64 
                  type="file"
                  multiple={false} 
                  onDone={(e) => {
                    form.setFieldsValue({
                      image: e.base64
                    })
                  }}
                />
              </Button>
              <TextField id="outlined-multiline-flexible" label="here is where you can write about anything you like" rows={6} multiline variant="outlined"/>
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