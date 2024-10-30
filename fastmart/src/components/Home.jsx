import React from 'react';
import CategorySection from './CategorySection';
import RecentAdsSection from './RecentAdsSection';

const Home = () => {
  return (
    <div className="flex flex-col space-y-6">
      <CategorySection />
      <RecentAdsSection />
    </div>
  );
};

export default Home;
