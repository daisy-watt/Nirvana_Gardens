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
import Image2 from '../asset/garden_example2.jpg';


function createData(name, detail) {
    return { name, detail };
};
  
const rows = [
createData('Consulting'),
createData('Sourcing'),
createData('Commercial', 'Business / Retail consulting and application.'),
createData('Hospitality', 'Site Specific consulting and maintainace.'),
createData('Residential', 'Home update consulting and maintainace.'),
];

const rows2 = [
createData('One off Care'),
createData('Regular Care'),
createData('Commercial', 'irrigation, pruning upkeep.'),
createData('Hospitality', 'Site Specific weeding, watering and maintainace.'),
createData('Residential', 'Home maintainace, mowing, weeding, pruning amd regen.'),
];



export default function Services() {

    return (
    <Container color="#01652F">
        <Typography variant="h6" gutterBottom component="div">
            <Stack direction="row">
                <CardContent color="#01652F">
                    <CardMedia
                        component="img"
                        alt="garden"
                        height="70"
                        src={Image}/>
                    <Typography gutterBottom variant="h6" color="#01652F" component="div">
                    Design + Landscaping services
                    </Typography>
                        <Typography variant="body1" color="#01652F">
                            <TableContainer component={Paper} color="#01652F">
                                <Table  aria-label="simple table">
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell color="#01652F" component="th" scope="row">
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
                        height="500"
                        src={Image}/>
                </CardContent>
                <CardContent>
                    <CardMedia
                        component="img"
                        alt="garden"
                        height="70"
                        src={Image2}/>
                    <Typography gutterBottom variant="h6" color="#01652F" component="div">
                   Care + Maintanance
                    </Typography>
                        <TableContainer component={Paper}>
                            <Table  aria-label="simple table">
                                <TableHead>
                                </TableHead>
                                <TableBody>
                                {rows2.map((row) => (
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
                        <CardMedia
                        component="img"
                        alt="garden"
                        height="500"
                        src={Image2}/>
                </CardContent>
            </Stack>
        </Typography>
    </Container>
    )
}