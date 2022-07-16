import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div >
      <Header count={count} />
      hello from App
      <h2>count : {count}</h2>
      <button onClick={() => setCount(count + 1)}> count + 1 </button>
      <Container count={count} />
    </div >
  );
}

export default App;
