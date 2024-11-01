import React from 'react'

import Navbar from '../NavBar'
import CategorySelect from './CategorySelect'

function PostAd() {
    return (
        <div className='flex flex-col gap-10'>
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className='flex flex-col gap-5'>
                {/* Header */}
                <h1 className='w-fit mx-auto text-4xl font-bold'>
                    Post Your Ad
                </h1>

                {/* Form */}
                <div className='shadow-xl w-3/4 mx-auto p-10 rounded-2xl'>
                    <form>
                        {/* Category */}
                        <div className='flex flex-col gap-4'>
                            <label className='text-2xl font-bold' htmlFor='category'>Category</label>
                            <CategorySelect id='category'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostAd
