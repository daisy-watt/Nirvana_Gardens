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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from '../asset/Garden.jpg';


function createData(name, detail) {
    return { name, detail };
  }
  
  const rows = [
    createData('Consulting'),
    createData('Sourcing'),
    createData('Commercial', 'Business / Retail consulting and application.'),
    createData('Hospitality', 'Site Specific consulting and maintainace.'),
    createData('Residential', 'Home update consulting and maintainace.'),
  ];



export default function Services(){
    return (
    <Container color="#01652F">
        <Card >
            <Stack direction="column">
            <CardMedia
                    component="img"
                    alt="garden"
                    height="100"
                    src={Image}/>
              
                <Typography variant="h6" gutterBottom component="div">
                    <Stack direction="row">
                    <CardContent>
                    <Typography gutterBottom variant="h6" color="#01652F" component="div">
                    Design / Landscaping services
                    </Typography>
                    <Typography variant="body1" color="#01652F">
                        <TableContainer component={Paper}>
                            <Table  aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell align="right">&nbsp;</TableCell>

                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.detail}</TableCell>

                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Typography>
                    <CardMedia
                    component="img"
                    alt="garden"
                    height="100"
                    src={Image}

                    // get image here for the bio - maybe look at another alternative layout 
                />
                    <Typography gutterBottom variant="h6" color="#01652F" component="div">
                    Care / Maintance services
                    </Typography>
                        <TableContainer component={Paper}>
                            <Table  aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell align="right">&nbsp;</TableCell>

                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.detail}</TableCell>

                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                </CardContent>
                </Stack>
                </Typography>
            </Stack>
        </Card>
    </Container>
    // should we see posts here? like that whole post function that is build - is it viewable here or maybe social links here?

    )
}