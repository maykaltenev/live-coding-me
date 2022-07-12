import { useState } from 'react'
import './App.css';
import Fruit from './components/Fruit';
const initialState = ['Apple', 'Banana', 'Mango', 'Lemon']
function App() {
  const [fruits, setFruits] = useState(initialState)

  const handleDelete = (fruit) => {
    const newFruits = fruits.filter(fr => fr !== fruit)
    setFruits(newFruits)
  }
  return (
    <div >
      <ul>{fruits.map((fruit, i) => (
        <Fruit handleDelete={handleDelete} key={i} fruit={fruit} />
      ))}
      </ul>
    </div>
  );
}

export default App;
