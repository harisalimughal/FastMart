import React from 'react'
import Navbar from '../NavBar'
import CategoryFilter from './filters/CategoryFilter'
import ConditionFilter from './filters/ConditionFilter'
import PriceFilter from './filters/PriceFilter'
import LocationFilter from './filters/LocationFilter'
import AdCard from './ad_card/AdCard'

function AdSearchResult() {
  return (
    <div className='flex flex-col gap-10 pb-10'>
      {/* Navbar */}
      <Navbar />

      <div className='flex pl-12 gap-10'>
        {/* Filters Section */}
        <div className='flex flex-col'>
          <CategoryFilter />
          <ConditionFilter />
          <PriceFilter />
          <LocationFilter />
        </div>

        {/* Ads List Section */}
        <div className='flex flex-col gap-10'>
          <AdCard
            imgUrl={"https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"}
          />
          <AdCard
            imgUrl={"https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"}
          />
          <AdCard
            imgUrl={"https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"}
          />
        </div>
      </div>
    </div>
  )
}

export default AdSearchResult