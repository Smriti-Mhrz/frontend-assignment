import React from 'react'
import logo from "../assets/images/icon.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    const navlist=[
        "Home", "About", "Products"
    ]
  return (
    <div className='navbar__wrapper'>
        <div className='navbar-logo'>
            <div className='navbar-image'>
                 <img src={logo} alt="logo"/>
            </div>
            <span>Online Store</span>
        </div>      
        <div className='navbar-items' key='items'>
            <ul>
                {
                    navlist.map((items)=>{
                        return(
                            <li>{items}</li>
                        )
                    })
                }                
                
            </ul>
        </div>
        <div className='navbar-search'>
            <input type="text" placeholder='Search Items.....'/>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>      
        </div>
        <div className='navbar-cart'>
            <FontAwesomeIcon icon={faShoppingCart}/>
        </div>

    </div>
  )
}


