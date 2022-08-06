import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function PostForm() {
  return (
      <Container maxWidth="25" sx={{ bgcolor: '#24ab62', height: '25vh' }}>
        <Typography variant="h6" gutterBottom component="div">
          Post Form
        </Typography>
      </Container>
  )
}

export default PostForm;