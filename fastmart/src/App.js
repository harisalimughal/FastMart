import React from 'react';
import Navbar from './components/Navbar';
import CategorySection from './components/CategorySection';
import RecentAdsSection from './components/RecentAdsSection';

function App() {
  return (
    <div className="App font-acad flex flex-col gap-16">
      <Navbar />
      <CategorySection />
      <RecentAdsSection />
    </div>
  );
}

export default App;
