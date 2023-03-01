import React from 'react'
import Alerta from '../components/Alert';
import '../styles/estilos.css';
import Contact from '../components/Contact';
import {FaWhatsapp} from "@react-icons/all-files/fa/FaWhatsapp";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";


const Contactme = () => {
  return (
    <div className='container contact-container'>
      <br /><br />
      <Alerta/>
      <div className="col-md-9 col-sm-12 menu contact-container-2">
          <form className="join-form" action="" method='POST'>
            <div className="join-form">
              <p>Name:</p>
              <input type="text" name='name' required className="inputs"/><br />
              <p>E-mail:</p>
              <input type="text" name='email' required className="inputs"/><br />
              <p>Message:</p>
              <textarea type="text" name='textarea' className='inputs' cols="40" rows="30"></textarea><br />
              <button className="btn-join-form">Send</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Contactme