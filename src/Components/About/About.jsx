import React from 'react'
import './About.css'
import about_img from '../../assets/clgabout.webp'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT JNIAS UC</h3>
            <h2>Mission</h2>
            <p>Our mission is to foster a dynamic learning community that empowers individuals to excel academically, embrace diversity, and contribute positively to society. Grounded in the principles of Democracy, integrity, innovation, and inclusivity, we are committed to providing a holistic education that nurtures intellectual curiosity, cultivates critical thinking skills, and fosters a passion for lifelong learning and to prepare ourstudents to meet the challenges of a rapidly changing world with confidence and competence. Our goal is to inspire excellence, creativity, and ethical leadership, empowering our graduates to make meaningful contributions in their chosen fields and become responsible global citizens.</p>
        </div>
    </div>
  )
}

export default About