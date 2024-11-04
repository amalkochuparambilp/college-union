import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

  const silder = useRef();
  let tx = 0;

  const slideForward = () => {
    if(tx > -50){
      tx -= 25;
    }
    silder.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    silder.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn'  onClick={slideForward} />
        <img src={back_icon} alt='' className='back-btn'  onClick={slideBackward} />
        <div className="slider">
          <ul ref={silder}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt=''/>
                  <div>
                    <h3>Kiran UK</h3>
                    <span>BCA </span>
                  </div>
                </div>
                <p>In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt=''/>
                  <div>
                    <h3>Albin K Manoj</h3>
                    <span>BCA</span>
                  </div>
                </div>
                <p>In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt=''/>
                  <div>
                    <h3>Amal K P</h3>
                    <span>BCA</span>
                  </div>
                </div>
                <p>In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt=''/>
                  <div>
                    <h3>student 4</h3>
                    <span>course name </span>
                  </div>
                </div>
                <p>In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials