import React from 'react'
import Alerta from '../components/Alert';
import '../styles/estilos.css';


const Contactme = () => {
  return (
    <div className='container contact-container'>
      <br /><br />
      <Alerta/>
      <div className="col-md-9 col-sm-12 menu contact-container-2">
          <form className="join-form" action="https://formsubmit.co/fotos.bcn2022@gmail.com" method='POST'>
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
          <div className="col-md-3 col-sm-12 menu">
            <ul>
              <li>Link Uno</li>
              <li>link dos</li>
              <li>link 3</li>
              <li>link 4</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 menu">
            <ul>
              <li>link uno</li>
              <li>link dos</li>
              <li>link 3</li>
              <li>link 4</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Contactme