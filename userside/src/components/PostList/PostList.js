import React from 'react';
import Stack from "@mui/material/Stack";
import Post from '../Post';
import { useSelector } from "react-redux";

function PostList(props) {

  const [posts, setPosts] = React.useState([])
  

    React.useEffect(
      () => {
        fetch('http://localhost:5001/api/getPosts')
        .then(async (res) => {
          setPosts(await res.json())
        })
      }, []
    )

  // const posts = useSelector((state) => state.posts);

  return (
    <Stack direction="column" >
      {
        posts.map(
          (post, index)=>
          {
            console.log(post);
            return <Post key={index} title={post.title} caption={post.caption} image={post.image} id={post._id} isLoggedIn={props.isLoggedIn}/>
          }
        )
      }
    </Stack>
  )
}

export default PostList;