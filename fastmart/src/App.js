// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/user_auth/Login';
import Signup from './components/user_auth/SignUp';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App font-acad ">
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
