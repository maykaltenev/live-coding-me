import './App.css';
import LoginPage from "./pages/Login";
import ProfilePage from './pages/Profile';
import { Routes, Route } from 'react-router-dom'
import PostPage from './pages/Post';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/posts" element={<PostPage />} />

      </Routes>
    </>
  );
}

export default App;
