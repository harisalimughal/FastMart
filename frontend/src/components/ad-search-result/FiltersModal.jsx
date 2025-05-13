import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

const FiltersModal = ({ setShowFiltersModal }) => {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50'>
            {/* Modal Background */}
            <div className='bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl font-bold'>Filters</h2>

                    {/* Close Button */}
                    <button className='text-red-500' onClick={() => { setShowFiltersModal(false) }}>
                        <IoIosCloseCircle className='text-2xl'/>
                    </button>
                </div>

                {/* Add your filter components here */}
                <div className='flex flex-col gap-4'>
                    {/* Category Filter */}
                    <div className='flex flex-col'>
                        <label htmlFor="category" className='mb-2'>Category</label>
                        <select id="category" className='border rounded p-2'>
                            <option value="">Select Category</option>
                            <option value="all">All Categories</option>
                            <option value="animals">Animals</option>
                            <option value="books">Books</option>
                            <option value="computer-and-accessories">Computer & Accessories</option>
                            <option value="vehicles">Vehicles</option>
                            <option value="clothing">Clothing</option>
                            <option value="gaming">Sports</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    {/* Condition Filter */}
                    <div className='flex flex-col'>
                        <label htmlFor="condition" className='mb-2'>Condition</label>
                        <select id="condition" className='border rounded p-2'>
                            <option value="">Select Condition</option>
                            <option value="any">Any</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>
                    </div>

                    {/* Price Filter */}
                    <div className='flex flex-col'>
                        <label htmlFor="price" className='mb-2'>Price</label>
                        <div className='flex gap-2'>
                            <input type="number" id="min-price" placeholder="Min Price" className='border rounded p-2 w-1/2' />
                            <input type="number" id="max-price" placeholder="Max Price" className='border rounded p-2 w-1/2' />
                        </div>
                    </div>

                    {/* Location Filter */}
                    <div className='flex flex-col'>
                        <label htmlFor="location" className='mb-2'>Location</label>
                        <select id="location" className='border rounded p-2'>
                            <option value="">Select Campus</option>
                            <option value="islamabad">Islamabad</option>
                            <option value="karachi">Karachi</option>
                            <option value="lahore">Lahore</option>
                            <option value="lahore">Peshawar</option>
                            <option value="lahore">Chiniot-Faisalabad</option>
                        </select>
                    </div>
                </div>

                {/* Apply Button */}
                <button
                    className='mt-4 bg-palletePurple text-white py-2 px-4 rounded w-full'
                    onClick={() => { setShowFiltersModal(false) }}
                >
                    Apply Filters
                </button>
            </div>
        </div>
    )
}

export default FiltersModal