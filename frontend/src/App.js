// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/user_auth/Login';
import Signup from './components/user_auth/SignUp';
import Home from './components/Home/Home';
import PostAd from "./components/selling-page/PostAd";
<<<<<<< HEAD:fastmart/src/App.js
=======
import AdSearchResult from "./components/ad-search-result/AdSearchResult";
>>>>>>> f651cc2dafe79c222ed9b060c18efbffb8271897:frontend/src/App.js

function App() {
  return (
    <div className="App font-acad ">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/postad' element={<PostAd />} />
        <Route path='/ad-search-result' element={<AdSearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
