import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Image from '../asset/Sunlogo.jpg';

function PostForm() {
  return (

        <Typography variant="h6" gutterBottom component="div">
          <Card sx={{ maxWidth: "100vw" }}>
            <CardMedia
              component="img"
              alt="garden"
              height="240"
              src={Image}
            />
            <CardContent>
               <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="standard-basic" label="Title" variant="standard" />
                </Box>
            </CardContent>
            <CardActions>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 2, width: '80vw' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </Box>
            </CardActions>
          </Card>
        </Typography>

  )
}

export default PostForm;