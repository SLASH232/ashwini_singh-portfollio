import React, { useRef, useState } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'
import emailjs from '@emailjs/browser';


function Footer() {

  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setloading] = useState(false);
  const { name, email, message } = formData;
  const handleChangeInput = ((e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value
    })
  });
  const form = useRef();
  const handleSubmit = (e) => {
    setloading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }
    client.create(contact).then(() => {
      setloading(false);
      setisFormSubmitted(true);
    })

    e.preventDefault();
    emailjs.sendForm('service_9vtdhyh', 'template_vht0jph', form.current, '5rWJWFzbv3_1qCP4Y')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }

  return (

    <>
      <h2 className='head-text'> For any Query Just Email me!  </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href='mailto:ashwinisingh@gmail.com' className='p-text'> ashwinisingh@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt="email" />
          <a href='tel: +91 8574272280' className='p-text'> +91 8574272280</a>
        </div>
      </div>
      {!isFormSubmitted ?
          <div className='app__footer-form app__flex'>
        <form ref={form} onSubmit={handleSubmit}>

            <div className='app__flex'>
              <input className='p-text' name='name' type="text" placeholder='YOUR NAME' value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className='app__flex'>
              <input className='p-text' name='email' type="email" placeholder='YOUR EMAIL' value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className='p-text'
                placeholder='Your Message'
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type='submit' className='p-text' > {loading ? 'Sending' : 'Send Message'}</button>
            {/* onClick={handleSubmit} */}

        </form>
          </div>
        :
        <div>
          <h3 className='head-text'>Thank you for getting in touch</h3>
        </div>

      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  'contact',
  'app__whitebg')