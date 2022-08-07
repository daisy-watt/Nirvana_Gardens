import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Image from '../asset/Garden.jpg';

function Post() {
  return (
  <Container>
      <Typography variant="h6" gutterBottom component="div">
        <Card >
          <CardMedia
            component="img"
            alt="garden"
            height="140"
            src={Image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" color="#01652F" component="div">
              title
            </Typography>
            <Typography variant="body2" color="#01652F">
              this is the conteant area / caption to the imgery Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" component="label">more info</Button>
          </CardActions>
        </Card>
      </Typography>
  </Container>
  )
}

export default Post