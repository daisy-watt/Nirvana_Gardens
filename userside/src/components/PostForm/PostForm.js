import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from '../asset/Sunlogo.jpg';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';

function PostForm() {
  return (
    <Typography variant="h6" gutterBottom component="div">
      <Stack direction="row">
        <Card sx={{ maxWidth: "100vw" }}>
          <CardMedia
            component="img"
            alt="garden"
            height="200vh"
            src={Image}/>
          <CardContent>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 4}, }}
              noValidate
                autoComplete="off">
              <Stack direction="row" alignItems="center" spacing={2}>
                <TextField id="standard-basic" label="write a title" variant="standard" />
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" multiple type="file" />
                  <PhotoCamera />
                </IconButton>
              </Stack>
            </Box>
          </CardContent>
          <CardActions>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 2, width: '80vw' }, }}
              noValidate
              autoComplete="off">
              <TextField id="outlined-basic" label="here is where you can write about anything you like" variant="outlined" />
              <Button variant="contained" endIcon={<SendIcon />}>
                share post
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Stack>
    </Typography>

  )
}

export default PostForm;