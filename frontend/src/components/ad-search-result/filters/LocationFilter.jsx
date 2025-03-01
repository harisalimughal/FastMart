import React from 'react'

function LocationFilter() {
    return (
        <div className='flex flex-col gap-4 border-b-2 border-black pb-4 pt-4'>
            {/* Header */}
            <h2 className='text-2xl font-bold'>
                Location
            </h2>

            {/* Location Select */}
            <select
                className='py-2 pl-3 pr-20 bg-white w-full border-2 border-black rounded-lg'
            >
                <option value=''>Select Campus</option>
                <option value='Islamabad'>Islamabad</option>
                <option value='Karachi'>Karachi</option>
                <option value='Lahore'>Lahore</option>
                <option value='Peshawar'>Peshawar</option>
                <option value='Chiniot-Faislabad'>Chiniot-Faislabad</option>
            </select>
        </div>
    )
}

export default LocationFilter