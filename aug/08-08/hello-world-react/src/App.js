import { useState } from "react";
import './App.css';
import Button from './components/Button';
import List from "./components/List";



const list = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({ firstName: '', lastName: '' })
  const handleClick = () => {
    // setCount(count + 1);
    alert(`My name is ${name.firstName}  ${name.lastName} `)
  };
  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: [e.target.value] })
    console.log(name)
  }
  return (
    <div className="App">
      <div className='center'>
        Hello World!
      </div>
      <button onClick={handleClick}>Click</button>
      <div>{count}</div>
      <List list={list} />
      <form onChange={handleChange}>
        <input type='text' name="firstName" placeholder="First name"></input>
        <input type='text' name="lastName" placeholder="Last name" ></input>
        <button onClick={handleClick}>Greeting</button>
      </form>
    </div >
  );
}

export default App;
