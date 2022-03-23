import { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffect() {

  const [posts, setPosts] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data[0])
    })
  }, [])

  return (
    <div>
      <h1>{posts.id}</h1>
      <h3>Title</h3>{posts.title}<br/>
      <h3>Body:</h3>{posts.body}<br/>      
    </div>
  );
}

export default UseEffect;
