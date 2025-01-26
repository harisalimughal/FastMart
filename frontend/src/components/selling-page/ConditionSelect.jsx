import React, { useState } from 'react'

function ConditionSelect({ onConditionChange }) {
    const [condition, setCondition] = useState('');

    const getButtonClass = (conditionValue) => {
        // When selected condition is new
        if (condition === 'New' && conditionValue === 'New') {
            return 'md:px-8 md:py-1 px-6 py-1 text-md md:text-xl bg-palletePurple text-white border-2 border-black rounded-xl hover:shadow-lg transition duration-300';
        }

        // When selected condition is not new
        else if (condition !== 'New' && conditionValue === 'New') {
            return 'md:px-8 md:py-1 px-6 py-1 text-md md:text-xl bg-gray-200 text-black border-2 border-black rounded-xl hover:shadow-lg transition duration';   
        }
            
        // When selected condition is used
        else if (condition === 'Used' && conditionValue === 'Used') {
            return 'md:px-8 md:py-1 px-6 py-1 text-md md:text-xl bg-palletePurple text-white border-2 border-black rounded-xl hover:shadow-lg transition duration-300';
        }
            
        // When selected condition is not used
        else if (condition !== 'Used' && conditionValue === 'Used') {
            return 'md:px-8 md:py-1 px-6 py-1 text-md md:text-xl bg-gray-200 text-black border-2 border-black rounded-xl hover:shadow-lg transition duration-300';
        }
    }

    return (
        <div className='flex gap-5 md:gap-10'>
            {/* New Button */}
            <button 
                onClick={() => {
                    setCondition('New');
                    onConditionChange('New');
                }}
                className={getButtonClass('New')}
            >
                New
            </button>

            {/* Used Button */}
            <button 
                onClick={() => {
                    setCondition('Used');
                    onConditionChange('Used');
                }}
                className={getButtonClass('Used')}
            >
                Used
            </button>
        </div>
    )
}

export default ConditionSelect
