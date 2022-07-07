import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }
  // //! Runs after every render:
  // useEffect(() => {
  //   console.log('hi from useEffect');
  // })
  // //! Runs once:
  // useEffect(() => {
  //   getData()
  //   console.log('hi from useEffect')
  // }, [])
  // //! runs on state change (count)
  // useEffect(() => {
  //   console.log('hi from useEffect')
  // }, [count])

  useEffect(() => {
    document.title = "newTitle" + count
    let mounted = true;
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((data) => {
        if (data.success && mounted) {
          setLoading(false)
        }
      })
    console.log('hi from useEffect');
    return () => {
      mounted = false
    }
    //fetch
  }, [count])
  return (

    <div className="App">
      <button onClick={() => setCount(count + 1)}>click me</button>
      <button onClick={getData}>show posts</button>
      count: {count}
      {post.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
