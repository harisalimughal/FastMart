import React from 'react'
import Navbar from '../NavBar'
import CategoryFilter from './filters/CategoryFilter'
import ConditionFilter from './filters/ConditionFilter'
import PriceFilter from './filters/PriceFilter'

function AdSearchResult() {
  return (
    <div className='flex flex-col gap-10'>
      {/* Navbar */}
      <Navbar />

      <div className='flex pl-12'>
        {/* Filters Section */}
        <div className='flex flex-col'>
          <CategoryFilter />
          <ConditionFilter />
          <PriceFilter />
        </div>

        {/* Ads List Section */}
      </div>
    </div>
  )
}

export default AdSearchResult