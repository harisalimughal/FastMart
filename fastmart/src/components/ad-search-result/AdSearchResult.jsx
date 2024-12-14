import React from 'react'
import Navbar from '../NavBar'
import CategoryFilter from './CategoryFilter'

function AdSearchResult() {
  return (
    <div className='flex flex-col gap-10'>
      {/* Navbar */}
      <Navbar />

      <div className='flex pl-12'>
        {/* Filters Section */}
        <div className='flex flex-col'>
          <CategoryFilter />
        </div>

        {/* Ads List Section */}
      </div>
    </div>
  )
}

export default AdSearchResult