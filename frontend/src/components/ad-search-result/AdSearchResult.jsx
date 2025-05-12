import React from 'react'
import Navbar from '../NavBar'
import CategoryFilter from './filters/CategoryFilter'
import ConditionFilter from './filters/ConditionFilter'
import PriceFilter from './filters/PriceFilter'
import LocationFilter from './filters/LocationFilter'
import AdCard from './ad_card/AdCard'

function AdSearchResult() {
  return (
    <div className='flex flex-col md:gap-10 gap-4 pb-10 w-full'>
      {/* Navbar */}
      <Navbar />

      <div className='flex md:pl-12 pl-5 gap-20 w-full'>
        {/* Filters Section */}
        <div className='md:flex flex-col hidden'>
          <CategoryFilter />
          <ConditionFilter />
          <PriceFilter />
          <LocationFilter />
        </div>

        {/* Ads List Section */}
        <div className='flex flex-col md:gap-10 gap-6 w-full md:pr-12 pr-5'>

          {/* Sort By */}
          <div className='flex items-center md:text-xl ml-auto'>
            <h2 className='font-bold'>Sort By: </h2>
            <select class="md:p-1 bg-transparent focus:outline-none md:w-fit w-[7rem]">
              <option>Most Recent</option>
              <option>Most Relevant</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <AdCard
            imgUrl={"https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"}
            title={"Honda Civic 12th Generation Model Bumper to bumper genuine"}
            condition={"Used"}
            price={"30,000"}
            location={"Lahore"}
            date={"2024-12-15T15:23:48Z"}
          />
          <AdCard
            imgUrl={"https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"}
            title={"Honda Civic 12th Generation Model Bumper to bumper genuine"}
            condition={"Used"}
            price={"30,000"}
            location={"Lahore"}
            date={"2024-12-15T00:00:00Z"}
          />
          <AdCard
            imgUrl={"https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"}
            title={"Honda Civic 12th Generation Model Bumper to bumper genuine"}
            condition={"Used"}
            price={"30,000"}
            location={"Lahore"}
            date={"2024-12-15T00:00:00Z"}
          />
          <AdCard
            imgUrl={"https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"}
            title={"Honda Civic 12th Generation Model Bumper to bumper genuine"}
            condition={"Used"}
            price={"30,000"}
            location={"Lahore"}
            date={"2024-12-15T00:00:00Z"}
          />
          <AdCard
            imgUrl={"https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg"}
            title={"Honda Civic 12th Generation Model Bumper to bumper genuine"}
            condition={"Used"}
            price={"30,000"}
            location={"Lahore"}
            date={"2024-12-15T00:00:00Z"}
          />
        </div>
      </div>
    </div>
  )
}

export default AdSearchResult