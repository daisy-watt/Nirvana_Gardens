import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from '../asset/jordan.jpg';
import Image2 from '../asset/Garden_2.jpg';


export default function AboutPage(){


    return (
    <Container color="#01652F">
        <Card >
            <Stack direction="row">
                <Typography variant="h6" gutterBottom component="div">
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="#01652F" component="div">
                         jordan saul
                        </Typography>
                        <Typography variant="body2" color="#01652F">
                        <p>
                        Australia is world renowned for its high quality fruits, grains and vegetables. Australia’s $8 billion horticulture industry is significant and diverse, with an expanding market and a need for skilled workers. 
                        </p>
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
                    height="400"
                    src={Image}
                />
            </Stack>
        </Card>
        <Card>
            <Stack direction="row">
                <Paper />
                <CardMedia
                    component="img"
                    alt="garden"
                    height="400"
                    src={Image2}
                />
                    <CardActions >
                <Box

                    component="form"
                    sx={{
                    '& .MuiTextField-root': { m: 1, width: '50vh' },}}
                    noValidate
                    autoComplete="off"
                    >
                    <Stack alignItems="center">
                    <Typography gutterBottom variant="h5" color="#01652F" component="div">
                        contact
                    </Typography>
                    <TextField id="standard-basic" label="your name"  />
                    <TextField id="standard-basic" label="your email"  />

                    <TextField id="outlined-multiline-flexible" label="ask anything you like" 
                        rows={6} 
                        multiline 
                        variant="outlined"
                        />
                    <Button >
                        get in touch
                    </Button>
                    </Stack> 
                </Box>
                 </CardActions>
            </Stack>
        </Card>

        
    </Container>

    )
}