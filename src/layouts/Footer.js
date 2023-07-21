import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from "../assets/images/icon.jpg"
import { faFaceAngry } from '@fortawesome/free-regular-svg-icons'

export const Footer = () => {
  return (
    <>
    <div className="footer__section">
      <div className="section__part tablet__part mb__part">
        <ul>
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li>Gravida nibh vel velit auctor aliquetn</li>
          <li className="icons">
            <i>
              <a>
                <FontAwesomeIcon icon={faFaceAngry}/>
              </a>
            </i>
            <i>
              <a>
                <FontAwesomeIcon icon={faFaceAngry} />
              </a>
            </i>
            <i>
              <a>
                <FontAwesomeIcon icon={faFaceAngry}/>
              </a>
            </i>
          </li>
        </ul>
      </div>
      <div className="section__part tablet__part mb__part">
        <ul>
          <li>
            <h3>Services</h3>
          </li>
          <li>Architecture Design</li>
          <li>Interior Design</li>
          <li>Autocad Services</li>
          <li>Lighting Design</li>
          <li>Poster Design</li>
        </ul>
      </div>
      <div className="section__part tablet__part mb__part">
        <ul>
          <li>
            <h3>Help</h3>
          </li>
          <li>Forum</li>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Contact US</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="section__part tablet__part mb__part">
        <ul>
          <li>
            <h3>Contact Info</h3>
          </li>
          <li>
            <span>Phone:</span> 
            +977- 9851444444
            <br />
          </li>
          <li>
            <span>Email:</span> useremail@gmail.com              
          </li>
          <li>
            <span>Address:</span> Nayabazar,
          <span>Kathmandu</span>
            
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}

