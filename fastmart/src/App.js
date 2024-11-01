// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
import PostAd from './components/selling-page/PostAd';

function App() {
  return (
    <div className="App font-acad ">

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
