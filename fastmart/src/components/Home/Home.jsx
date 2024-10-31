import React from 'react';
import CategorySection from './CategorySection';
import RecentAdsSection from './RecentAdsSection';
import Navbar from './NavBar';

const Home = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Navbar />
      <CategorySection />
      <RecentAdsSection />
    </div>
  );
};

export default Home;
