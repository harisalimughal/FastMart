import React from 'react'

const AdDetailsSubSection = ({ heading, descriptionLine1 = "", descriptionLine2 = "", icon = <></> }) => {
    return (
        <div className='bg-[#efefef] p-4 rounded-lg'>
            <h2 className='text-xl font-bold'>{heading}</h2>
            <div className='flex items-center gap-1'>
                <p className='text-gray-700'>{descriptionLine1}</p>
                {icon && <div>{icon}</div>}
            </div>
            {descriptionLine2 && <p className='text-gray-700'>{descriptionLine2}</p>}
        </div>
    )
}

export default AdDetailsSubSection