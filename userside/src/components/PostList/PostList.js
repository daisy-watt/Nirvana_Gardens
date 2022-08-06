import React from 'react';
import Stack from "@mui/material/Stack";
import Post from '../Post';
import { useSelector } from "react-redux";

function PostList() {
  const posts = useSelector((state) => state.posts);

  consople.log('posts', posts)
  return (
    <Stack spacing={2}>
        <Post />
        <Post />
    </Stack>
  )
}

export default PostList;