import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import CreateTodo from './pages/CreateTodo';
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<p>Hello</p>} />
        <Route path='/create' element={<p>Create a todo</p>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
