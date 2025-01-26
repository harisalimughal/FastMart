import React from 'react'


import animal from '../../assets/animal.png'
import book from '../../assets/book.png'
import car from '../../assets/car.png'
import clothing from '../../assets/clothing.png'
import electronics from '../../assets/electronics.png'
import gaming from '../../assets/gaming.png'
import others from '../../assets/others.png'
import sports from '../../assets/sports.png'

function CategorySection() {
    return (
        <div className='flex flex-col gap-8 w-11/12 md:w-4/5 mx-auto mt-16'>
            {/* Header */}
            <h1 className='text-2xl md:text-4xl font-bold w-fit mx-auto'>
                Explore Popular Categories
            </h1>

            {/* Categories */}
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
        </div>
    )
}

export default CategorySection