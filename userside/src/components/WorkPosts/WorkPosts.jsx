import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Image from '../asset/Garden.jpg';
import Image2 from '../asset/garden_example2.jpg';
import PostList from '../PostList';
import BottomBar from '../BottomBar/BottomBar';

export default function WorkPosts(){
    return (
    <Container color="#01652F">
        <Stack direction="row">
            <Box >
                <Typography variant="h6" gutterBottom component="div">
                <CardContent>
                    <CardMedia
                        component="img"
                        alt="garden"
                        height="300"
                        src={Image} />
                    <Typography  variant="h4" color="#01652F" component="div">
                    portfolio of work
                    </Typography>
                        <Typography variant="body2" color="#01652F">
                        here is a load of text about this really cute garden 
                        here is a load of text about this really cute garden
                    <CardMedia
                    component="img"
                    alt="garden"
                    height="300"
                    src={Image2} />
      

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
            </Box>
            <PostList />
        </Stack>
    </Container>
    // should we see posts here? like that whole post function that is build - is it viewable here or maybe social links here?

    )
}