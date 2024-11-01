import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>JNIAS COLLEGE UNION</h1>
        <p>Together, we strive to build a brighter future, one inspired mind and enriched life at a time</p>
        <button className='btn'>Explore More<img src={dark_arrow} alt=''/></button>
      </div>
    </div>
  )
}

export default Hero