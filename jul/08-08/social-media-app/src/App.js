import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [posts, setPosts] = useState([])
  const [showModal, setModal] = useState(false)
  useEffect()
  return (
    <div className="App">
      {
        posts.map(item => {
          return <div key={item._id}>
            {item.message}
          </div>
        })
      }
      <button>+</button>
      {
        showModal ?
          (
            <div className='modal'>
              <textarea placeholder='type your post'></textarea>
            </div>
          )
          : null
      }

    </div>
  );
}

export default App;
