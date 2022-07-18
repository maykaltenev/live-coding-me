<<<<<<< HEAD
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
=======
import { useState, useReducer } from "react";

// The reducer function accepts two parameters - the state and the action object
// the state is passed by React, the action object is whatever we pass inside the dispatch function
function reducer(state, action) {
  // based on the value of action.type, we can modify parts of the state
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "change-email":
      return { ...state, email: state.email };
  }
}

function App() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    name: "John",
    email: "a@a.c",
  });

  console.log(state, "use reducer");

  return (
    <div className="App">
      <h1> use reducer hook</h1>
      {/* examp;e with useState */}
      <h2>Count with useState: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <hr />
      {/* examle with useReducer */}
      <h2>Count with useReducer hook: {state.count} </h2>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment use reducer count
      </button>

      <button
        onClick={() =>
          dispatch({ type: "change-email", newEmail: "email@email.com" })
        }
      >
        Change email to email@email.com
      </button>
    </div>
>>>>>>> c3cd5dffffe453823952a5a3429f63f6fe4222d1
  );
}

export default App;
