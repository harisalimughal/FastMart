import React from 'react'
import Ad from './Ad'

function RecentAdsSection() {
    return (
        <div className='flex flex-col gap-8 w-11/12 md:w-4/5 mx-auto'>
            {/* Header */}
            <h1 className='text-2xl md:text-4xl font-bold w-fit mx-auto'>
                Recent Ads
            </h1>

            {/* Ads */}
            <div className='md:flex md:flex-row md:justify-between md:gap-0 flex flex-col gap-10'>
                <Ad ad_details={{
                    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg',
                    price: 10000,
                    title: 'BMW Car 2010 Model for Sale',
                    campus_location: 'Islamabad',
                    posted_at: '2023-10-01T12:00:00Z'
                }} />

                <Ad ad_details={{
                    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg',
                    price: 10000,
                    title: 'BMW Car 2010 Model for Sale',
                    campus_location: 'Islamabad',
                    posted_at: '2023-10-01T12:00:00Z'
                }} />

                <Ad ad_details={{
                    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg',
                    price: 10000,
                    title: 'BMW Car 2010 Model for Sale',
                    campus_location: 'Islamabad',
                    posted_at: '2023-10-01T12:00:00Z'
                }} />
            </div>
        </div>
    )
}

export default RecentAdsSection
