import React, { useState } from 'react'
import './PgNavBar.css'
import logo from '../../assets/clglogo.png'
import menu from '../../assets/menu-icon.png'

const PgNavbar = () => {

  const [moblieMenu, setMoblieMenu] = useState(false);
  const toggleMenu = () => {
    moblieMenu ? setMoblieMenu(false) : setMoblieMenu(true);
  }

  return (
  <nav className={'container'}>
        <img src={logo} alt="" className='logo'/>
        <ul className={moblieMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li>Program (under work)</li>
           {/* <li><Link to='about' smooth={true} offset={0} duration={500}>About us</Link></li>
            <li><Link to='testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact us</Link></li>
           */}
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default PgNavBar