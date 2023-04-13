import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './pages/login';
import Home from './pages/Home';
import './css/main.css';





function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
