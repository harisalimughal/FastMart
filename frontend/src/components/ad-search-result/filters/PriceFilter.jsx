import React from 'react'

function PriceFilter() {
    return (
        <div className='flex flex-col gap-4 border-b-2 border-black pb-4 pt-4'>
            {/* Header */}
            <h2 className='text-2xl font-bold'>
                Price
            </h2>

            <div className='flex flex-col gap-4 text-lg'>
                {/* Min Price */}
                <div className='relative flex items-center'>
                    <span className='absolute left-3 font-bold'>Rs.</span>
                    <input
                        type='number'
                        min={0}
                        step={1}
                        className='pl-10 pr-3 py-2 border-2 border-black rounded-lg text-lg'
                        placeholder='Min'
                    />
                </div>

                {/* Max Price */}
                <div className='relative flex items-center'>
                    <span className='absolute left-3 font-bold'>Rs.</span>
                    <input
                        type='number'
                        min={0}
                        step={1}
                        className='pl-10 pr-3 py-2 border-2 border-black rounded-lg text-lg'
                        placeholder='Max'
                    />
                </div>
            </div>
        </div>
    )
}

export default PriceFilter