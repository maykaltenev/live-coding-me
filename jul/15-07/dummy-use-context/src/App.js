import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import { Context } from './components/context/countContext';
function App() {
  const { count, setCount } = useContext(Context);
  return (
    <div >
      <Header count={count} />
      hello from App
      <h2>count : {count}</h2>
      <button onClick={() => setCount(count + 1)}> count + 1 </button>
      <Container />
    </div >
  );
}

export default App;
