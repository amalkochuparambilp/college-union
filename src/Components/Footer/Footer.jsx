import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2024-25 JNIAS COLLAGE UNION.</p>
        <ul>
            <li>Dev by AMAL KP BCA 3YEAR</li>
            <li>Contact us</li>
            <li>
              <Link to="/admin">
              ...
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default Footer
