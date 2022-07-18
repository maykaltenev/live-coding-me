import React, { useReact } from 'react'
import './App.css';
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}
function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
