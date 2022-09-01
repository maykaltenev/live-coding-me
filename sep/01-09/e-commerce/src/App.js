import { Routes, Route } from 'react-router-dom'
import './App.css';
import Signup from './components/Singup'
function App() {
  return (
    <div className="App">
      <Signup />
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
