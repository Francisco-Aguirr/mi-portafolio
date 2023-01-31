import React, { useState, useEffect, Component } from 'react';
import '../styles/estilos.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from '../imagenes/yop.jpg';
import {Link} from "react-router-dom"
import Timer from '../components/Timer';
import Progresshtml from '../components/Progress';
import Progresscss from '../components/Progresscss';
import Progressjs from '../components/Progressjs';
import Progressreact from '../components/Progressreact';
import Progressphp from '../components/Progresphp';
import Progresslaravel from '../components/Progresslaravel';


const Home = () => {
  return (
    <div className='bg-home'>
      <div className='home-body container'>
        <div className='avatar-card'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
            <Card.Title>Francisco Aguirre</Card.Title>
            <Card.Text>
            I’m a Full Stack Developer, and a passionate about building beauty and responsive websites. In my own way of learning I’ve participate in the creation of websites from the design based on customers’ requirements to the code.
            <br/>My technologies skills.  
            </Card.Text>
            <div className="progres">
              <small>Html5:</small>
              <Progresshtml/>
              <small>CSS:</small>
              <Progresscss/>
              <small>JavaScript:</small>
              <Progressjs/>
              <small>React:</small>
              <Progressreact/>
              <small>PHP:</small>
              <Progressphp/>
              <small>Laravel:</small>
              <Progresslaravel/>
            </div>
        </Card.Body>
        </Card>
        </div>
        <div >
            <Card className='info-cards'>
                <Card.Header><b>About Me</b></Card.Header>
                <Card.Body>
                    <Card.Title>I invite you to meet me</Card.Title>
                    <Card.Text>
                    Here you may know about who I am, about my life and my passions.
                    This section will make you able to know me as person.
                    </Card.Text>
                    <Link to="/AboutMe"><Button variant="primary" className='card-btn'>Meet Me</Button></Link>
                </Card.Body>
            </Card>
            <Card className='info-cards'>
                <Card.Header><b>About My Projects</b></Card.Header>
                <Card.Body>
                    <Card.Title>I invite you to meet my projects</Card.Title>
                    <Card.Text>
                    Here you may know about my jobs, about my projects and technologies I’m able to use. <br/>
                    This section will show you my abilities as developer and my longlife working experience.
                    </Card.Text>
                    <Link to="/AboutMyProjects"><Button className='card-btn'>Meet my jobs</Button></Link>
                </Card.Body>
            </Card>
            <Card className='info-cards'>
                <Card.Header><b>Contact Me</b></Card.Header>
                <Card.Body>
                    <Card.Title>I invite you to contact me</Card.Title>
                    <Card.Footer>
                    <small className="text-muted">You have been knowing me<Timer/></small>
                    </Card.Footer>
                    <Card.Text>
                    I think I deserve a call.  Find here some ways you can contact me. 
                    </Card.Text>
                    <Link to="/Contactme"><Button className='card-btn'>Let's talk</Button></Link>
                </Card.Body>
            </Card>
        </div>
      </div>
      
    </div>
  )
}

export default Home