import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/clggallery-1.webp'
import gallery_2 from '../../assets/clggallery-2.webp'
import gallery_3 from '../../assets/clggallery-3.webp'
import gallery_4 from '../../assets/clggallery-4.webp'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-router-dom'

const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
            <img src={gallery_1} alt='' />
            <img src={gallery_2} alt='' />
            <img src={gallery_3} alt='' />
            <img src={gallery_4} alt='' />
        </div>
        <Link to="/akpdevz">
          <button className='btn dark-btn'>See More Here <img src={white_arrow} alt='' /></button>
        </Link>
    </div>
  )
}

export default Campus