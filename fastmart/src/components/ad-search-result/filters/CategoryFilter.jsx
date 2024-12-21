import React from 'react'

function CategoryFilter() {
    return (
        <div className='flex flex-col gap-4 border-b-2 border-black pb-4'>
            {/* Header */}
            <h2 className='text-2xl font-bold'>
                Category
            </h2>

            {/* Category List */}
            <div className='flex flex-col text-lg gap-2 text-palleteRed'>
                <button className='text-left'>
                    All Categories
                </button>

                <button className='text-left'>
                    Animals
                </button>

                <button className='text-left'>
                    Books
                </button>

                <button className='text-left'>
                    Computers & Accessories
                </button>

                <button className='text-left'>
                    Vehicles
                </button>

                <button className='text-left'>
                    Clothing
                </button>

                <button className='text-left'>
                    Gaming
                </button>

                <button className='text-left'>
                    Sports
                </button>

                <button className='text-left'>
                    Others
                </button>
            </div>
        </div>
    )
}

export default CategoryFilter