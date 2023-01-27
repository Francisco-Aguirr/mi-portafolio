import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import '../styles/estilos.css';
import Card from 'react-bootstrap/Card';
import img3 from '../imagenes/yop.jpg';
import ScrollToTopButton from '../components/ScrollToTopButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutMe = () => {
  return (
    
    <div className='container'>
      <div className='About-body container'>
      <Card className='aboutMe-card'>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/AboutMyProjects">About My Jobs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" disabled>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text className='texto-carta'>
        I'm the result of my desitions,
        At this point in my life I can say that I am the type of person 
        that I hoped to be when I was a child.. <br />
        Below I will tell you about the experiences that I consider have helped me grow mentally,
        spiritually and intellectually.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    
    <br></br>
    <hr/>
    
    <div className='timeline'>
      
      <div className='container-2 left-container'>
        <img src={img3} alt="" />
        <div className='text-box'>
          <h2>A Travel Of Life</h2>
          <small>2008-2010</small>
          <p>This year I took a trip that changed my life, mindset and personality. 
            For two years I lived between Argentina, Brazil and Uruguay serving as a volunteer missionary for the Church of Jesus Christ LDS. 
            This experience helped me to open my mind to the greatness of the world and the great diversity of cultures.
             By working together with many people of many nationalities, I learned to deal with all kinds of people.
              This service also helped me establish the fundamental moral bases in society: respect, honesty, responsibility and work.
            </p>
            <span className='left-container-arrow'></span>
        </div>
      </div>
   
      <div className='container-2 right-container'>
        <img src={img3} alt="" />
        <div className='text-box'>
          <h2>Missing People</h2>
          <small>2010</small>
          <p>The death of my grandmother was a hard moment,
             her departure motivated me to get closer to my family 
             and enjoy the time shared with loved ones.</p>
            <span className='right-container-arrow'></span>
        </div>
      </div>

      <div className='container-2 left-container'>
        <img src={img3} alt="" />
        <div className='text-box'>
          <h2>New Beginning</h2>
          <small>2016</small>
          <p>
            My marriage. Since I was a child I wanted to have my own home, 
            I was never afraid of the responsibility of growing and maturing, 
            forming my own family was an important step in my development, 
            life as a couple has given me the opportunity to know how to listen and know how to make decisions 
            by consensus.</p>
            <span className='left-container-arrow'></span>
        </div>
      </div>

      <div className='container-2 right-container'>
        <img src={img3} alt="" />
        <div className='text-box'>
          <h2>Fatherhood</h2>
          <small>2017</small>
          <p>The birth of my first daughter. For many, fatherhood is a burden, a delay. 
             For me it has been a boost in every aspect, both in working life and in intellectual growth. Since that day I have accomplished more than I had in the previous 27 years. I did 3 years of university,
             held 5 jobs at different companies, got wiser in managing my finances and started a small business.</p>
            <span className='right-container-arrow'></span>
        </div>
      </div>

      <div className='container-2 left-container'>
        <img src={img3} alt="" />
        <div className='text-box'>
          <h2>Appreciating Life</h2>
          <small>2021</small>
          <p>The birth of my second daughter represented a real challenge and was a beacon of hope for us. 
            Being born in the middle of the pandemic, with my wife and I positive for Covid19, 
            her health was the strength we needed to defeat that virus. It gave us back the desire to get up and recover from all the mental, health and economic blows that confinement and unemployment gave us. 
            We started a business and managed to get ahead.      </p>
            <span className='left-container-arrow'></span>
        </div>
      </div>

      <div className='container-2 right-container'>
        <img src={img3} alt="" />
        <div className='text-box'>
          <h2>Refocus</h2>
          <small>2022</small>
          <p>We moved to Europe. A total change that has recharged my motivation,
             my dreams and aspirations have been reborn. My goals are now higher. </p>
            <span className='right-container-arrow'></span>
        </div>
      </div>

      <div className='container-2 left-container'>
        <img src={img3} alt="" />
        <div className='text-box'>
          <h2>About me</h2>
          <small>2022</small>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Nihil mollitia facere dolores atque, delectus labore eos iure deserunt corporis 
            perferendis aliquid minus maiores asperiores molestiae accusamus placeat, 
            eum officiis dolor.</p>
            <span className='left-container-arrow'></span>
        </div>
      </div>

    </div>
    <div className='boton-arriba'><ScrollToTopButton/></div>
    
    <br /><br />
    </div>
    
    
  )
}

export default AboutMe