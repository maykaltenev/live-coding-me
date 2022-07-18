import { useState, useReducer } from 'react'

import './App.css';

function reducer(state, action) {

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }

}
function App() {
  const [count, setCount] = useState(0);
  // console.log(count)
  // state return an object with property count
  const [state, dispatch] = useReducer(reducer, { count: 0, name: 'john' });
  // console.log(state, 'use-reducer')
  return (
    <div className="App">
      <h1>useState hook</h1>
      <h2>Count with useState</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <hr />
      <h1>useReducer hook</h1>
      <h2>Count with useReducer: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment use reducer count</button>
    </div >
  );
}

export default App;
