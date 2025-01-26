import React from 'react'

function Ad({ ad_details }) {
    return (
        <div className='flex flex-col md:w-1/4 hover:cursor-pointer hover:shadow-lg hover:rounded-lg transition duration-300'>
            {/* Image */}
            <img
                src={ad_details.image}
                className='rounded-t-xl'
                alt={ad_details.title}
            >    
            </img>

            {/* Text Details */}
            <div className='flex flex-col bg-gray-100 rounded-b-xl p-3 gap-2 select-none'>
                {/* Price */}
                <h3 className='font-bold text-lg md:text-2xl'>
                    Rs. {ad_details.price}
                </h3>

                {/* Title */}
                <p className='text-lg md:text-2xl'>
                    {ad_details.title}
                </p>

                <div className='text-gray-500'>
                    {/* Campus Location */}
                    <p className='text-lg md:text-xl'>
                        {ad_details.campus_location}
                    </p>

                    {/* Posted At */}
                    <p className='text-sm md:text-md'>
                        {
                            new Date(ad_details.posted_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Ad
