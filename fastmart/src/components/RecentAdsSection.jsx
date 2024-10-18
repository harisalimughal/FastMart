import React from 'react'
import Ad from './Ad'

function RecentAdsSection() {
    return (
        <div className='flex flex-col gap-8 w-4/5 mx-auto'>
            {/* Header */}
            <h1 className='text-4xl font-bold w-fit mx-auto'>
                Recent Ads
            </h1>

            {/* Ads */}
            <div className='flex justify-between'>
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
