import React from 'react'

function AdCard({ imgUrl, title, price, location, date, condition }) {
    return (
        <div className='flex gap-5'>
            {/* Ad Image */}
            <img
                src={imgUrl}
                alt='ad'
                className='w-96 h-60 object-cover rounded-lg'
            />
        </div>
    )
}

export default AdCard