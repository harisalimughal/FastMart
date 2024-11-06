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

function CategorySelect({ onCategoryChange }) {
    return (
        <div className='flex justify-between gap-4 md:gap-0 overflow-x-auto custom-scrollbar w-4/5'>

            <button
                onClick={() => onCategoryChange('animal')}
                className='bg-gray-200 rounded-full p-2 md:p-3 border-2 hover:border-black transition duration-300'
            >
                <img src={animal} className='w-10 min-w-10 min-h-10' alt='animal'></img>
            </button>

            <button
                onClick={() => onCategoryChange('book')}
                className='bg-gray-200 rounded-full p-2 md:p-3 border-2 hover:border-black transition duration-300'
            >
                <img src={book} className='w-10 min-w-10 min-h-10' alt='book'></img>
            </button>

            <button
                onClick={() => onCategoryChange('car')}
                className='bg-gray-200 rounded-full p-2 md:p-3 border-2 hover:border-black transition duration-300'
            >
                <img src={car} className='w-10 min-w-10 min-h-10' alt='car'></img>
            </button>

            <button
                onClick={() => onCategoryChange('clothing')}
                className='bg-gray-200 rounded-full p-2 md:p-3 border-2 hover:border-black transition duration-300'
            >
                <img src={clothing} className='w-10 min-w-10 min-h-10' alt='clothing'></img>
            </button>

            <button
                onClick={() => onCategoryChange('electronics')}
                className='bg-gray-200 rounded-full p-2 md:p-3 border-2 hover:border-black transition duration-300'
            >
                <img src={electronics} className='w-10 min-w-10 min-h-10' alt='electronics'></img>
            </button>

            <button
                onClick={() => onCategoryChange('gaming')}
                className='bg-gray-200 rounded-full p-2 md:p-3 border-2 hover:border-black transition duration-300'
            >
                <img src={gaming} className='w-10 min-w-10 min-h-10' alt='gaming'></img>
            </button>

            <button
                onClick={() => onCategoryChange('sports')}
                className='bg-gray-200 rounded-full p-2 md:p-3 border-2 hover:border-black transition duration-300'
            >
                <img src={sports} className='w-10 min-w-10 min-h-10' alt='sports'></img>
            </button>

            <button
                onClick={() => onCategoryChange('others')}
                className='bg-gray-200 rounded-full p-2 md:p-3 border-2 hover:border-black transition duration-300'
            >
                <img src={others} className='w-10 min-w-10 min-h-10' alt='others'></img>
            </button>


        </div>
    )
}

export default CategorySelect
