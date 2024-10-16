import React from 'react'

// Import category images
import animal from '../assets/categories/animal.png'
import book from '../assets/categories/book.png'
import car from '../assets/categories/car.png'
import clothing from '../assets/categories/clothing.png'
import electronics from '../assets/categories/electronics.png'
import gaming from '../assets/categories/gaming.png'
import others from '../assets/categories/others.png'
import sports from '../assets/categories/sports.png'

function CategorySection() {
    return (
        <div className='flex flex-col gap-8'>
            {/* Header */}
            <h1 className='text-3xl font-bold w-fit mx-auto'>
                Explore Popular Categories
            </h1>

            {/* Categories */}
            <div className='flex gap-10 justify-center'>

                <button className='bg-gray-200 rounded-full p-5 border-2 hover:border-black transition duration-300'>
                    <img src={animal} className='w-11' alt='animal'></img>
                </button>

                <button className='bg-gray-200 rounded-full p-5 border-2 hover:border-black transition duration-300'>
                    <img src={book} className='w-11' alt='book'></img>
                </button>

                <button className='bg-gray-200 rounded-full p-5 border-2 hover:border-black transition duration-300'>
                    <img src={car} className='w-11' alt='car'></img>
                </button>

                <button className='bg-gray-200 rounded-full p-5 border-2 hover:border-black transition duration-300'>
                    <img src={clothing} className='w-11' alt='clothing'></img>
                </button>

                <button className='bg-gray-200 rounded-full p-5 border-2 hover:border-black transition duration-300'>
                    <img src={electronics} className='w-11' alt='electronics'></img>
                </button>

                <button className='bg-gray-200 rounded-full p-5 border-2 hover:border-black transition duration-300'>
                    <img src={gaming} className='w-11' alt='gaming'></img>
                </button>

                <button className='bg-gray-200 rounded-full p-5 border-2 hover:border-black transition duration-300'>
                    <img src={sports} className='w-11' alt='sports'></img>
                </button>

                <button className='bg-gray-200 rounded-full p-5 border-2 hover:border-black transition duration-300'>
                    <img src={others} className='w-11' alt='others'></img>
                </button>


            </div>
        </div>
    )
}

export default CategorySection