import { Routes, Route, Navigate } from 'react-router-dom'

// Components
import './App.css';
import Header from './components/Header';
import AboutPage from './pages/About'
import HomePage from './pages/Home'
function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* Fallback route */}
        {/* <Route path='*' element={<NotFoundPage />} /> */}
        {/* Uf the user goes to a URL we do not have, we redirect them to the home page */}
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
