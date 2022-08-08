
import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import { PostContext } from './contexts/Posts';

// 1. context
// 2. fetching 
// rendering objects and array
// input state
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json();
  return data;
}

function App() {


  const [text, setText] = useState('');
  const { posts, setPosts } = useContext(PostContext);
  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data));
  }, [])
  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div >
      <input onChange={handleChange} value={text} type={"text"}></input>
      {posts.filter(post => post.title.toLowerCase().includes(text.toLowerCase()))
        .map(post => (
          <React.Fragment key={post.id}>
            <div >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            <hr />
          </React.Fragment>
        ))}
    </div>
  );
}

export default App;
