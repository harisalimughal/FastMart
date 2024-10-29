import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Login from './components/Login';
import Signup from './components/SignUp';
import Navbar from './components/Navbar';
import CategorySection from './components/CategorySection';
import RecentAdsSection from './components/RecentAdsSection';

function App() {
  return (
    <div className="App font-acad flex flex-col gap-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<CategorySection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories" element={<CategorySection />} />
        <Route path="/recent-ads" element={<RecentAdsSection />} />
      </Routes>
    </div>
  );
}

export default App;
