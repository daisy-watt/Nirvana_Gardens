import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from '../asset/Garden.jpg';

export default function AboutPage(){
    return (
    <Container>
        <Card color="#01652F">
            <Typography variant="h6" gutterBottom component="div">
            <CardMedia
                component="img"
                alt="garden"
                height="200"
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
            </Typography>
        </Card>
    </Container>
    )
}