import React from 'react'
import { formatDistanceToNow } from "date-fns";

function AdCard({ imgUrl, title, price, location, date, condition }) {
    return (
        <div className='md:flex md:flex-row flex flex-col gap-5 border-b-2 pb-4 w-full'>
            {/* Ad Image */}
            <img
                src={imgUrl}
                alt='ad'
                className='md:w-64 md:h-60 w-full object-cover rounded-lg'
            />

            {/* Ad Details */}
            <div className='flex flex-col justify-between gap-2 md:gap-0'>

                <div>
                    {/* Ad Title */}
                    <h2 className='md:text-2xl text-lg'>{title}</h2>

                    {/* Condition */}
                    <h2 className='md:text-xl text-gray-600'>{condition}</h2>
                </div>

                {/* Ad Price */}
                <h2 className='md:text-2xl text-lg font-bold'>Rs. {price}</h2>

                <div>
                    {/* Ad Location */}
                    <h2 className='md:text-xl text-gray-600'>{location}</h2>

                    {/* Ad Date */}
                    <h2 className='md:text-xl text-gray-600'>{formatDistanceToNow(new Date(date), { addSuffix: true })}</h2>
                </div>
            </div>
        </div>
    )
}

export default AdCard