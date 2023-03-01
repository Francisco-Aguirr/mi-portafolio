import Alerta from '../components/Alert';
import '../styles/estilos.css';
import Contact from '../components/Contact';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ba4z15v', 'template_vd1wewe', form.current, 'z58phr_bLD1LA70kW')
      .then((result) => {
          alert("correo enviado");
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return ( 
    <div className='container contact-container-2'>
      <br />
      <Alerta/>
      <form className="join-form field" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="inputs" type="text" name="user_name" />
        <label>Email</label>
        <input className="inputs" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="inputs text-area" name="message" />
        <input type="submit" value="Send" />
      </form>    
    </div>
  )
}

export default Contactme