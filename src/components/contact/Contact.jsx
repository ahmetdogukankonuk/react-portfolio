import React from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsWhatsapp} from 'react-icons/bs';
import {BsTelephone} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5> Get In Touch </h5>
      <h2> Contact Me </h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>E-Mail:</h4>
            <h5>example@gmail.com</h5>
            <a href="mailto:example@gmail.com">Send an E-Mail</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp:</h4>
            <h5>+1 23 123 123 </h5>
            <a href="https://api.whatsapp.com/send?phone=+123123123">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsTelephone className='contact__option-icon' />
            <h4>Phone:</h4>
            <h5> +1 23 123 12 </h5>
            <a href="tel:+1 23 123 12">Call Me</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact