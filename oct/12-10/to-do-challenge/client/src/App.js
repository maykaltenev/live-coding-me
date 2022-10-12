import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import CreateTodo from './pages/CreateTodo';
import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<CreateTodo/>} />
         </Routes>
      </BrowserRouter>
  );
}

export default App;
