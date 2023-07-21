import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ServiceCard = ({icons, title, desc}) => {
  return (
    <div className='service__wrapper'>
      <FontAwesomeIcon icon={icons}/>
      <div>
            <h5>{title}</h5>
            <p>{desc}</p>
            </div>
    </div>
  )
}

