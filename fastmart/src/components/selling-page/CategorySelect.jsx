import React from 'react'

// Import category images
import animal from '../../assets/categories/animal.png'
import book from '../../assets/categories/book.png'
import car from '../../assets/categories/car.png'
import clothing from '../../assets/categories/clothing.png'
import electronics from '../../assets/categories/electronics.png'
import gaming from '../../assets/categories/gaming.png'
import others from '../../assets/categories/others.png'
import sports from '../../assets/categories/sports.png'

function CategorySelect() {
  return (
      <div className='flex justify-between gap-4 md:gap-0 overflow-x-auto custom-scrollbar'>

          <button className='bg-gray-200 rounded-full p-2 md:p-5 border-2 hover:border-black transition duration-300'>
              <img src={animal} className='w-14 min-w-10 min-h-10' alt='animal'></img>
          </button>

          <button className='bg-gray-200 rounded-full p-2 md:p-5 border-2 hover:border-black transition duration-300'>
              <img src={book} className='w-14 min-w-10 min-h-10' alt='book'></img>
          </button>

          <button className='bg-gray-200 rounded-full p-2 md:p-5 border-2 hover:border-black transition duration-300'>
              <img src={car} className='w-14 min-w-10 min-h-10' alt='car'></img>
          </button>

          <button className='bg-gray-200 rounded-full p-2 md:p-5 border-2 hover:border-black transition duration-300'>
              <img src={clothing} className='w-14 min-w-10 min-h-10' alt='clothing'></img>
          </button>

          <button className='bg-gray-200 rounded-full p-2 md:p-5 border-2 hover:border-black transition duration-300'>
              <img src={electronics} className='w-14 min-w-10 min-h-10' alt='electronics'></img>
          </button>

          <button className='bg-gray-200 rounded-full p-2 md:p-5 border-2 hover:border-black transition duration-300'>
              <img src={gaming} className='w-14 min-w-10 min-h-10' alt='gaming'></img>
          </button>

          <button className='bg-gray-200 rounded-full p-2 md:p-5 border-2 hover:border-black transition duration-300'>
              <img src={sports} className='w-14 min-w-10 min-h-10' alt='sports'></img>
          </button>

          <button className='bg-gray-200 rounded-full p-2 md:p-5 border-2 hover:border-black transition duration-300'>
              <img src={others} className='w-14 min-w-10 min-h-10' alt='others'></img>
          </button>


      </div>
  )
}

export default CategorySelect
