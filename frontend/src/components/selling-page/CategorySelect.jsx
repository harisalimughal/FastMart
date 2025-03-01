import React, { useState } from 'react'

// Import category images
import animal from '../../assets/animal.png'
import book from '../../assets/book.png'
import car from '../../assets/car.png'
import clothing from '../../assets/clothing.png'
import electronics from '../../assets/electronics.png'
import gaming from '../../assets/gaming.png'
import others from '../../assets/others.png'
import sports from '../../assets/sports.png'

function CategorySelect({ onCategoryChange }) {
    const [selectedCategory, setSelectedCategory] = useState('');

    // function to handle category click
    const handleCategoryClick = (category) => {
        const newCategory = selectedCategory === category ? '' : category; // unselect category if already selected
        setSelectedCategory(newCategory);
        onCategoryChange(newCategory);
    };

    // function to get button class according to category selection state
    const getButtonClass = (category) => {
        return `bg-gray-200 rounded-full p-2 md:p-3 border-2 transition duration-300 ${
            selectedCategory === category ? 'border-black' : 'hover:border-black'
        }`;
    };

    return (
        <div className='flex justify-between gap-4 md:gap-0 overflow-x-auto custom-scrollbar md:w-4/5 w-full'>
            <button
                onClick={() => handleCategoryClick('animal')}
                className={getButtonClass('animal')}
            >
                <img src={animal} className='w-10 min-w-10 min-h-10' alt='animal'></img>
            </button>

            <button
                onClick={() => handleCategoryClick('book')}
                className={getButtonClass('book')}
            >
                <img src={book} className='w-10 min-w-10 min-h-10' alt='book'></img>
            </button>

            <button
                onClick={() => handleCategoryClick('car')}
                className={getButtonClass('car')}
            >
                <img src={car} className='w-10 min-w-10 min-h-10' alt='car'></img>
            </button>

            <button
                onClick={() => handleCategoryClick('clothing')}
                className={getButtonClass('clothing')}
            >
                <img src={clothing} className='w-10 min-w-10 min-h-10' alt='clothing'></img>
            </button>

            <button
                onClick={() => handleCategoryClick('electronics')}
                className={getButtonClass('electronics')}
            >
                <img src={electronics} className='w-10 min-w-10 min-h-10' alt='electronics'></img>
            </button>

            <button
                onClick={() => handleCategoryClick('gaming')}
                className={getButtonClass('gaming')}
            >
                <img src={gaming} className='w-10 min-w-10 min-h-10' alt='gaming'></img>
            </button>

            <button
                onClick={() => handleCategoryClick('sports')}
                className={getButtonClass('sports')}
            >
                <img src={sports} className='w-10 min-w-10 min-h-10' alt='sports'></img>
            </button>

            <button
                onClick={() => handleCategoryClick('others')}
                className={getButtonClass('others')}
            >
                <img src={others} className='w-10 min-w-10 min-h-10' alt='others'></img>
            </button>
        </div>
    )
}

export default CategorySelect
