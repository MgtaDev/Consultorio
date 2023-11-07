import React, { useEffect } from "react";
import axios from "axios";
import Navbar from './components/Navbar/nav.jsx'
import Footer from './components/Footer/footer.jsx'
import LandingPage from './views/Landing/landing.jsx'
import Contact from './views/Contact/contact.jsx'
import About from './views/About/about.jsx'
import Detail from './views/Detail/detail.jsx'
import Dashboard from './views/Dashboard2/dashboard.jsx'
import Services from './views/Services/services.jsx'
import { Routes, Route, useLocation } from "react-router-dom";
import { allCitas } from "./redux/actions.js";
import { useDispatch } from "react-redux";
axios.defaults.baseURL = "http://localhost:3001"


function App () {
  
    const location = useLocation()

    const sendWhatsappMessage = () => {
      window.open("https://wa.me/584121968978", "_blank")
    };

  return (
    <div>
      {
            location.pathname !== "" ? <Navbar /> : null
         }
      <Routes>
        <Route exact path="/" element={< LandingPage/>} />
        <Route path="/contact" element={< Contact/>} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Services />} />        
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/paciente/:clienteId" element={<Detail/>}/>
      </Routes>
      {
            location.pathname !== "" ? <Footer /> : null
         }
  
    </div>
  );
}

export default App;