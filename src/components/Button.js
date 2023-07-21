import React from 'react'

export const Button = ({type, className,label, value, handleClick, name}) => {
  return (
    <div className='button'>
     <button type={type} label={label} className={className} value={value} onClick={handleClick}>{name}</button>
    </div>
  )
}


