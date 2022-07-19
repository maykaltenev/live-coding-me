import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Router
import { BrowserRouter } from 'react-router-dom';
//Context
import UserContextProvider from './context/User';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextProvider>
);

