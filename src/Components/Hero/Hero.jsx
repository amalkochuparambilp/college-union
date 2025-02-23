import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>JNIAS COLLEGE UNION</h1>
        <p>Together, we strive to build a brighter future, one inspired mind and enriched life at a time</p>
        {/* <Link to='/akpdevz'> */}
        <button className='btn'>
          <a href='https://google.com'>Explore More</a>
          <img src={dark_arrow} alt=''/></button>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Hero