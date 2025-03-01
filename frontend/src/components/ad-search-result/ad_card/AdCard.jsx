import React from 'react'
import { formatDistanceToNow } from "date-fns";

function AdCard({ imgUrl, title, price, location, date, condition }) {
    return (
        <div className='flex gap-5 border-b-2 pb-4 w-full'>
            {/* Ad Image */}
            <img
                src={imgUrl}
                alt='ad'
                className='w-64 h-60 object-cover rounded-lg'
            />

            {/* Ad Details */}
            <div className='flex flex-col justify-between'>

                <div>
                    {/* Ad Title */}
                    <h2 className='text-2xl'>{title}</h2>

                    {/* Condition */}
                    <h2 className='text-xl text-gray-600'>{condition}</h2>
                </div>

                {/* Ad Price */}
                <h2 className='text-2xl font-bold'>Rs. {price}</h2>

                <div>
                    {/* Ad Location */}
                    <h2 className='text-xl text-gray-600'>{location}</h2>

                    {/* Ad Date */}
                    <h2 className='text-xl text-gray-600'>{formatDistanceToNow(new Date(date), { addSuffix: true })}</h2>
                </div>
            </div>
        </div>
    )
}

export default AdCard