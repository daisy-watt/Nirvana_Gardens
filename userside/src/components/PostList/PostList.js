import React from 'react';
import Stack from "@mui/material/Stack";
import Post from '../Post';


function PostList() {
  return (
    <Stack spacing={2}>
        <Post />
        <Post />
    </Stack>
  )
}

export default PostList;