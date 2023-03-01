import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../styles/estilos.css';
import img5 from '../imagenes/parte-1.png'
import img6 from '../imagenes/Captura de pantalla de 2023-01-19 14-40-24.png'
import img7 from '../imagenes/Captura de pantalla de 2023-01-19 15-18-20.png'
import img8 from '../imagenes/Captura de pantalla de 2023-01-19 15-37-11.png'
import img9 from '../imagenes/Captura de pantalla de 2023-01-20 10-20-47.png'
import img10 from '../imagenes/211675191-06e40e24-c09c-4a44-8520-b855f63c51da.png'
import img11 from '../imagenes/Captura de pantalla de 2023-01-20 10-36-53.png'
import img12 from '../imagenes/Captura de pantalla de 2023-01-27 10-28-56.png'
import img13 from '../imagenes/Captura de pantalla de 2023-03-01 09-41-03.png'
import { Link } from 'react-router-dom';
import {FaReact} from "@react-icons/all-files/fa/FaReact";

const AboutMyProjects = () => {
  return (
    <div className='container projects-container'>
         <div className='About-body container'>
                <Card className='aboutMe-card'>
                <Card.Header>
                  <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                      <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/Contactme">Contact Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="" disabled>
                        About Me
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text className='texto-carta'>
                  All these projects were developed using <em>the most current technology tools</em> of the moment, 
                  with <strong>Agile</strong> methodologies, Git version control, design and planning taking into account the 
                  user requirements regarding <strong>UX/UI.</strong> maintaining the fidelity of the mokups when they were given 
                  to us. <br />
                  <h5>Hover over each card to see more details</h5>
                  </Card.Text>
                </Card.Body>
                </Card>
            </div>
        <div className="cardi">
            <div className="face front">
                <img src={img5} alt="" />
                <h3>MobileApp Landing Page</h3>
            </div>
            <div className="face back">
                <h3>MobileApp Landing Page</h3>
                <p> 
                This was my first layout project. Using only HTML and CSS, without frameworks or libraries. <br /><br />
                Project Links:
                </p>
                <div className="link">
                    <a href="https://github.com/Francisco-Aguirr/replicaWeb" target='_blank'>GitHub</a>
                </div>
            </div>
        </div>
        <div className="cardi">
            <div className="face front">
                <img src={img6} alt="" />
                <h3>Web Tributo</h3>
            </div>
            <div className="face back">
                <h3>Web Tributo</h3>
                <p> 
                In this project the objective was to make a tribute to an already existing page and try to improve it. 
                The layout was made with HTML5, CSS and the Bootstrap framework. <br /><br />
                Projects Links:
                </p>
                <div className="link">
                    <a href="https://github.com/Francisco-Aguirr/MaradonArts_Dev-s_Web_Tributo" target="_blank">GitHub</a>
                    <a href="https://www.figma.com/file/Lrb96KpXOZzrLdFlXSQJwW/Web-tributo-%7C-Maradonarts-devs?node-id=0%3A1" target="_blank">Figma</a>
                    <a href="https://maradonarts-web-tributo.vercel.app/index.html" target="_blank">Web</a>
                </div>
            </div>
        </div>
        <div className="cardi">
            <div className="face front">
                <img src={img7} alt="" />
                <h3>Duck Or Goose</h3>
            </div>
            <div className="face back">
                <h3>Dook or Goose</h3>
                <p>
                Duck or Goose is a web used to sacrifice coders, the web-app uses a fair and random system to
                choose between them.
                We implement HTML5, CSS, Sass, JavaScript and Bootstrap. <br /><br />
                Project links:
                </p>
                <div className="link">
                    <a href="https://github.com/Francisco-Aguirr/Duck-or-Goose" target="_blank">GitHub</a>
                    <a href="https://duck-or-goose.netlify.app/" target="_blank">Web</a>
                    <a href="https://www.figma.com/file/3iwp8TBScjjziOVjd9Z5Qn/Wheel-Of-Doom?node-id=0%3A1" target="_blank">Figma</a>
                </div>
            </div>
        </div>
        <div className="cardi">
            <div className="face front">
                <img src={img8} alt="" />
                <h3>Replica web React</h3>
            </div>
            <div className="face back">
                <h3>Replica web react</h3>
                <p> 
                This was my first layout project with <b>React</b>, 
                I used CSS animations to give the page dynamism. 
                With this project I learned the basic organization of folders in React and to use the React Router Dom <br /><br />
                Project links:
                </p>
                <div className="link">
                    <a href="https://github.com/Francisco-Aguirr/Primera-landing-con-React" target="_blank">GitHub</a>
                    <a href="https://primera-landing-con-react-rhnk.vercel.app/" target="_blank">Web</a>
                </div>     
            </div>
        </div>
        <div className="cardi">
            <div className="face front">
                <img src={img9} alt="" />
                <h3>Ranking App</h3>
            </div>
            <div className="face back">
                <h3>Ranking App</h3>
                <p> 
                Ranking-App is a Web made to qualify all the applications that exist and 
                put them in a ranking of the best, the intermediate and the worst.
                It was developed with React components, Stilted Components and Hooks like useState and usEffect. <br /> <br />
                Project links:                   
                </p>
                <div className="link">
                    <a href="https://github.com/Francisco-Aguirr/rankingApp" target="_blank">GitHub</a>
                    <a href="https://ranking-app-liart.vercel.app/" target="_blank">Web</a>
                    <a href="https://www.figma.com/file/FxzxqXn8Ts9h9e7wZVpShc/Ranking-App?node-id=30%3A2&t=R2i6I8MNBBUzuZ8K-0" target="_blank">Figma</a>
                </div>
            </div>
        </div>
        <div className="cardi">
            <div className="face front">
                <img src={img10} alt="" />
                <h3>PHP CRUD</h3>
            </div>
            <div className="face back">
                <h3>CRUD PHP</h3>
                <p> 
                This was an individual project, it is a basic <strong>PHP CRUD</strong> that uses the MySql database and Bootstrap framework for the frontend.
                In this project I learned to create, manipulate and connect a <strong>MySql</strong> database with SQLi and PDO methods. <br /><br />
                Project links:    
                </p>
                <div className="link">
                    <a href="https://github.com/Francisco-Aguirr/CRUD-PHP" target="_blank">Github</a>
                </div>
            </div>
        </div>
        <div className="cardi">
            <div className="face front">
                <img src={img11} alt="" />
                <h3>Timer</h3>
            </div>
            <div className="face back">
                <h3>Timer</h3>
                <p> 
                This was a personal and simple project in which I used setTimeOut, setInterval and Date JavaScript's properties to make a timer 
                that indicates the remaining Bootcamp time. <br /><br />
                Project links:
                </p>
                <div className="link">
                    <a href="https://github.com/Francisco-Aguirr/SimpleCounter" target="_blank">GitHub</a>
                    <a href="https://simple-counter-smoky.vercel.app/" target="_blank">Web</a>
                </div>
            </div>
        </div>
        <div className="cardi">
            <div className="face front">
                <img src={img12} alt="" />
                <h3>Mi Portafolio</h3>
            </div>
            <div className="face back">
                <h3>Mi Portafolio</h3>
                <p> 
                    I have developed my personal portfolio using all the methodologies learned in the bootcamp, from planning, design and development. 
                    implementing GIT version control, merging the <strong>frontend</strong> with the <strong>backend</strong>.  <br /><br />
                    Project Links: 
                </p>
                <div className="link">
                    <a href="https://github.com/Francisco-Aguirr/mi-portafolio" target="_blank">GitHub</a>
                    <a href="https://www.figma.com/file/GuBQU7bDUTGJk8DMgis9NR/My-portafolio?node-id=18%3A39&t=esJUi5IgaYJO6Cn2-0" target="_blank">Figma</a>
                </div>
            </div>
        </div>
        <div className="cardi">
            <div className="face front">
                <img src={img13} alt="" />
                <h3>Colombia Shop</h3>
            </div>
            <div className="face back">
                <h3>Colombia Shop</h3>
                <p> 
                    This was our final project, it consisted of making a marketplace for the Colombian community in Barcelona.
                    Developed in React and Laravel, being a Full-Stack project that mixes the most modern technologies of web development..  <br /><br />
                    Project Links: 
                </p>
                <div className="link">
                    <a href="https://github.com/Francisco-Aguirr/colombia-shop-back" target="_blank">GitHub</a>
                    <a href="https://www.figma.com/file/dChaXbdXPk75qA4iDOQNyK/Colombia-Shop?node-id=12%3A203&t=0zIrfWcUvM5i8uQn-0" target="_blank">Figma</a>
                </div>
            </div>
        </div>
        <br /><br />
        <div className="boton-arriba">
         <ScrollToTopButton/>
        </div>
        
    </div>
  )
}

export default AboutMyProjects