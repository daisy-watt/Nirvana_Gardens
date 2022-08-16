import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from '../asset/Garden.jpg';

function Post(props) {

  // image is currently a base 64 string
  // we need to turn that to url

  //props.onSubmitted(); 

  return (
  <Container>
      <Typography variant="h6" gutterBottom component="div">
        <Card >
          <CardMedia
            component="img"
            alt="garden"
            height="100"
            src={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" color="#01652F" component="div">
             { props.title }
            </Typography>
            <Typography variant="body2" color="#01652F">
              { props.caption }
            </Typography>
          </CardContent>
          {
            props.isLoggedIn
            ? (
            <CardActions>
              <IconButton aria-label="delete" color="primary" size="large" onClick={async () => {
                const data = {
                  "id": props.id
                };
            
                const res = await fetch('http://localhost:5001/api/deletePost', {
                  method: 'DELETE',
                  body: JSON.stringify(data),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });

                props.onDelete()
              }}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              
            </CardActions>
            )
            : (<React.Fragment/>)
          }
          
        </Card>
      </Typography>
  </Container>
  )
}

export default Post