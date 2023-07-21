import React from 'react'
import logo from "../assets/images/icon.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    // const navlist=[
    //     "Home", "About", "Products"
    // ]
    
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
                <li><NavLink to="/" className="active">Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
                {/* {
                    navlist.map((items)=>{
                        return(
                            <li>{items}</li>
                            )
                        })
                    }                 */}
                
                    <NavLink to="/addcart">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    </NavLink>
            </ul>
        </div>
     
        

    </div>
  )
}


