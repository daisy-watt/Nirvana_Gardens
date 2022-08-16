import React from 'react';
import Stack from "@mui/material/Stack";
import Post from '../Post';
import { useSelector } from "react-redux";

function PostList(props) {

  const [posts, setPosts] = React.useState([])
  const [lastPostUpdateTime, setLastPostUpdateTime] = React.useState(0);

  const Refresh = () => {
    console.log('refresh');
    fetch('http://localhost:5001/api/getPosts')
    .then(async (res) => {
      setPosts(await res.json())
      setLastPostUpdateTime(Date.now())
    })
  }

    React.useEffect(
      () => {
        Refresh()
      }, []
    )

    React.useEffect(
      () => {
        if (props.LastRefreshTime > lastPostUpdateTime)
          {
            Refresh()
          }
      }
    )

  // const posts = useSelector((state) => state.posts);

  return (
    <Stack direction="column" >
      {
        posts.map(
          (post, index)=>
          {
            return <Post onDelete={Refresh} key={index} title={post.title} caption={post.caption} image={post.image} id={post._id} isLoggedIn={props.isLoggedIn}/>
          }
        )
      }
    </Stack>
  )
}

export default PostList;