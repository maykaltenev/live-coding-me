import { useState } from "react";
import './App.css';
import Button from './components/Button';
import List from "./components/List";



const list = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className='center'>
        Hello World!
      </div>
      <button onClick={handleClick}>Click</button>
      <div>{count}</div>
      <List list={list} />
    </div >
  );
}

export default App;
