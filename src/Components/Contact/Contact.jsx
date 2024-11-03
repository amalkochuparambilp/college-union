import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a6f68b1-ac05-47bb-a699-931a96449eb8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us Messages <img src={msg_icon} alt=''/></h3>
            <p>Feel free to contact us</p>
            <ul>
                <li><img src={mail_icon} alt=''/>amalkochuparambilp@gmail.com</li>
                <li><img src={phone_icon} alt=''/>+91 12345 67890</li>
                <li><img src={location_icon} alt=''/>balagram</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your Moble Number' required/>
            <label>Write Your Name</label>
            <textarea name='message' rows='6' placeholder='Enter your message here' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt=''/></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact