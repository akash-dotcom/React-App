import React from 'react'

const RightPanelPart = ({Icon, title}) => {
  return (
    <div className='my-2'>
            <button className='flex flex-col items-center'>
                {Icon}
                <span className='text-white text-sm'>{title}</span> 
            </button>
    </div>
  )
}

export default RightPanelPart;
