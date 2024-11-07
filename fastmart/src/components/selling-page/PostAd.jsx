import React, { useState } from 'react'

import Navbar from '../NavBar'
import CategorySelect from './CategorySelect'
import ConditionSelect from './ConditionSelect'
import moneyEmoji from '../../assets/others/money-emoji.png'

function PostAd() {
    const [category, setCategory] = useState('');
    const [condition, setCondition] = useState('');

    // function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // function to handle category change in CategorySelect component
    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    }

    // function to handle condition change in ConditionSelect component
    const handleConditionChange = (selectedCondition) => {
        setCondition(selectedCondition);
    }

    return (
        <div className='flex flex-col gap-10'>
            {/* Navbar */}
            <Navbar />

            {/* Money Emoji */}
            <div className='w-48 mx-auto fixed right-44 top-36 -z-10 opacity-50'>
                <img src={moneyEmoji} alt='money-emoji'></img>
            </div>

            {/* Main Content */}
            <div className='flex flex-col gap-5'>
                {/* Header */}
                <h1 className='w-fit mx-auto text-4xl font-bold'>
                    Post Your Ad
                </h1>

                {/* Form */}
                <div className='shadow-xl w-3/4 mx-auto p-10 rounded-2xl'>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-10'
                    >
                        {/* Category */}
                        <div className='flex flex-col gap-4'>
                            <label className='text-2xl font-bold'>Category</label>
                            <CategorySelect onCategoryChange={handleCategoryChange} />
                        </div>

                        {/* Condition */}
                        <div className='flex flex-col gap-4'>
                            <label className='text-2xl font-bold'>Condition</label>
                            <ConditionSelect onConditionChange={handleConditionChange} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostAd