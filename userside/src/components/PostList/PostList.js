import React from 'react';
import Stack from "@mui/material/Stack";
import Post from '../Post';
import { useSelector } from "react-redux";

function PostList() {
  const posts = useSelector((state) => state.posts);

  console.log('posts', posts);
  return (
    <Stack direction="row" spacing={2}>
        <Post />
        <Post />
    </Stack>
  )
}

export default PostList;