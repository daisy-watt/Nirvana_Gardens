import React from 'react';
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

// import FileBase64 from "react-file-base64";

import Image from '../asset/Sunlogo.jpg';

function PostForm() {

  // THIS IS UDEMY GUYS with the other library
  // const [form] = Form.useForm();
  const onSubmit = () => {
  
    
  };

// this is INSTEAD of base64 package <input hidden accept="image/*" multiple type="file"


  // this is muis version of state use value={value} onChange={handleChange} in component tags
  // const [value, setValue] = React.useState('Controlled');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <Typography variant="h6" component="div" >
      <Stack direction="column" alignItems="center">
        <Card>
          <CardMedia
            component="img"
            alt="garden"
            height="400vh"
            src={Image}/>
          <CardActions>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50vh' },}}
            noValidate
            autoComplete="off"
            >
            <Stack alignItems="center">
              <TextField id="standard-basic" label="write a title" />
              <Button aria-label="upload picture" component="label" endIcon={<PhotoCamera />}>
                attach picture
                {/* <FileBase64 
                  type="file"
                  multiple={false}
                  onDone={(e) => { 
                  }}
                /> */}
              </Button>
              <TextField id="outlined-multiline-flexible" label="here is where you can write about anything you like" rows={6} multiline variant="outlined"/>
              <Button endIcon={<SendIcon />} >
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