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
import PostList from '../PostList';
import BottomBar from '../BottomBar/BottomBar';

export default function WorkPosts(){
    return (
    <Container color="#01652F">
            <Stack direction="row">
                <Card >
                    <Typography variant="h6" gutterBottom component="div">
                    <CardContent>
                        <CardMedia
                        component="img"
                        alt="garden"
                        height="400"
                        src={Image} />
                        <Typography  variant="h4" color="#01652F" component="div">
                        Design services
                        </Typography>
                        <Typography variant="body2" color="#01652F">
                        here is a load of text about this really cute garden 
                        here is a load of text about this really cute garden 
 
                        {/* // this is where we talk about jordan
                        - background (grew up in...)
                        - specialisation (area of expertise)
                        - special interest in: regen with native plants (fixing and healing land - first nations led)
                        // this is where we talk about jordan
                        - background (grew up in...)
                        - specialisation (area of expertise)
                        - special interest in: regen with native plants (fixing and healing land - first nations led) */}
                        </Typography>
                    </CardContent>
                    </Typography>
                </Card>
                    <PostList />
            </Stack>
        <BottomBar />    
    </Container>
    // should we see posts here? like that whole post function that is build - is it viewable here or maybe social links here?

    )
}