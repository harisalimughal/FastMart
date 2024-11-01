import React from 'react'

import Navbar from './NavBar'

function PostAd() {
    return (
        <div className='flex flex-col gap-10'>
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div>
                {/* Header */}
                <h1 className='w-fit mx-auto text-4xl font-bold'>
                    Post Your Ad
                </h1>

                {/* Form */}
                <div>

                </div>
            </div>
        </div>
    )
}

export default PostAd
