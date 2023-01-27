import React from 'react'

import { BrowserRouter, Route, Routes} from "react-router-dom" 
import AboutMe from '../vistas/AboutMe';
import AboutMyProjects from '../vistas/AboutMyProjects';
import Contactme from '../vistas/Contactme';
import Home from '../vistas/Home';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* path direccion */}
            <Route path="/" element= {<Home/>}/>
            <Route path="/AboutMe" element= {<AboutMe/>}/>
            <Route path="/AboutMyProjects" element= {<AboutMyProjects/>}/>
            <Route path="/Contactme" element= {<Contactme/>}/>
           
        </Routes>
        
        </BrowserRouter>
  );
}

export default Router