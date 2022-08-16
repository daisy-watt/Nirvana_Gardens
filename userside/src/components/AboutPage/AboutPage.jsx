import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from '../asset/Garden.jpg';


export default function AboutPage(){
    return (
    <Container color="#01652F">
        <Card >
            <Stack direction="row">
                <Typography variant="h6" gutterBottom component="div">
                <CardContent>
                    <Typography gutterBottom variant="h5" color="#01652F" component="div">
                    Nirvana Gardens - by jordan saul
                    </Typography>
                    <Typography variant="body2" color="#01652F">

                    // this is where we talk about jordan
                    - background (grew up in...)
                    - specialisation (area of expertise)
                    - special interest in: regen with native plants (fixing and healing land - first nations led)
                    // this is where we talk about jordan
                    - background (grew up in...)
                    - specialisation (area of expertise)
                    - special interest in: regen with native plants (fixing and healing land - first nations led)
                    </Typography>
                </CardContent>
                </Typography>
                <CardMedia
                    component="img"
                    alt="garden"
                    height="600"
                    src={Image}

                    // get image here for the bio - maybe look at another alternative layout 
                />
            </Stack>
        </Card>
        
    </Container>
    // should we see posts here? like that whole post function that is build - is it viewable here or maybe social links here?

    )
}