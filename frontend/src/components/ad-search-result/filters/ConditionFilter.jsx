import React from 'react'

function ConditionFilter() {
    return (
        <div className='flex flex-col gap-4 border-b-2 border-black pb-4 pt-4'>
            {/* Header */}
            <h2 className='text-2xl font-bold'>
                Condition
            </h2>

            {/* Condition List */}
            <div className='flex flex-col text-lg gap-2 text-palleteRed'>
                <button className='text-left'>
                    Any
                </button>

                <button className='text-left'>
                    New
                </button>

                <button className='text-left'>
                    Used
                </button>
            </div>
        </div >
    )
}

export default ConditionFilter