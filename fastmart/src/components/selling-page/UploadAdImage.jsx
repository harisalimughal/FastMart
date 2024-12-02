import React from 'react'

import plusIcon from '../../assets/others/plus.png'

function UploadAdImage() {
    return (
        <div className='px-7 py-5 bg-gray-100 w-fit border-2 border-black rounded-xl text-2xl hover:cursor-pointer'>
            <img src={plusIcon} alt='plus-icon' className='w-5 h-5'></img>
        </div>
    )
}

export default UploadAdImage
