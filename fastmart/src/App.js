// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Navbar from './components/NavBar';
import Home from './components/Home';
import PostAd from './components/PostAd';

function App() {
  return (
    <div className="App font-acad ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/postad' element={<PostAd />} />
      </Routes>
    </div>
  );
}

export default App;
