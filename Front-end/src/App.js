import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from './components/Navbar/nav.jsx'
import Footer from './components/Footer/footer.jsx'
import LandingPage from './views/Landing/landing.jsx'
import Contact from './views/Contact/contact.jsx'
import About from './views/About/about.jsx'
import Detail from './views/Detail/detail.jsx'
import Dashboard from './views/Dashboard2/dashboard.jsx'
import Services from './views/Services/services.jsx'
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { allCitas } from "./redux/actions.js";
import { useDispatch } from "react-redux";
import Booking from "./views/Booking/Booking.jsx";
import Loaction from "./components/Location/location.jsx";
import ChooseYourappointment from './views/Booking/ChooseYourappointment.jsx';
import SchedulingFor from "./views/Booking/Scheduling-for.jsx";
import SignIn from "./views/Sign In/SignIn.jsx";
import LogIn from "./views/Log in/LogIn.jsx";
import BookingDetails from "./views/Booking/BookingDetails.jsx";
import SchedulingForDetails from "./views/Booking/SchedulingForDetails.jsx";
import { firebaseAuth, firestore } from "./utils/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import  UserContext  from './context/UserContext.jsx'
import AdminLogin from "./views/AdminLogin/AdminLogin.jsx";
import CitaContext from "./context/CitaContext.jsx";
// axios.defaults.baseURL = "http://localhost:3001"
axios.defaults.baseURL = "consultorio-production.up.railway.app"




function App () {
const [User, setUser] = useState({})
const [Cita, setCita] = useState({
   fecha: '',
   hora: '',
   descripcion: '',
   medicoId: '',
   clienteId: '',
   cliente_name: '',
   medico_name: '', 
   tipo_cita: '',
   
    datos_del_paciente: {
    nombre:'',
    apellido:'',
    email: '',
    numero_telefono: '',
    cedula_identidad: '',
    genero: '',
    fecha_nacimiento: '',

    }
}
)



  
  const location = useLocation()

  const sendWhatsappMessage = () => {
      window.open("https://wa.me/584121968978", "_blank")
  };

  return (
    <div>
      {/* Navbar settings */}
      <UserContext.Provider value={{ User, setUser }}>
      <CitaContext.Provider value={{ Cita, setCita }}>
      {
            location.pathname === "/booking" || location.pathname === "/admin-login" || location.pathname === '/booking/choosing' || location.pathname === '/scheduling-for' || location.pathname === '/scheduling-for-details' || location.pathname === '/patient-details' ||  location.pathname === '/signin' || location.pathname ==='/login' ? null : location.pathname ==='/admin/dashboard' ? null : <Navbar/>
         }
        <Routes>
        <Route exact path="/" element={< LandingPage/>} />
        <Route path="/contact" element={< Contact/>} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Services />} />        
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/paciente/:clienteId" element={<Detail/>}/>
        <Route path="/booking/" element={<Booking  setCita={setCita}/>}/>
        <Route path="/booking/choosing" element={<ChooseYourappointment setCita={setCita}/>}/>
        <Route path="/signin" element={<SignIn setUser={setUser} setCita={setCita}/>}/>
        <Route path="/login" element={<LogIn setUser={setUser} setCita={setCita}/>}/>
        <Route path="/scheduling-for" element={<SchedulingFor/>}/>
        <Route path="/patient-details" element={<BookingDetails setCita={setCita}/>}/>
        <Route path="/scheduling-for-details" element={<SchedulingForDetails setCita={setCita}/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
      </Routes>
     
      {/* Footer settings */}
      {
        location.pathname === "/booking" || location.pathname === "/admin-login"  || location.pathname === '/booking/choosing' || location.pathname === '/scheduling-for'  || location.pathname === '/scheduling-for-details' || location.pathname === '/patient-details' || location.pathname === '/signin' || location.pathname ==='/login' ? null : location.pathname !== '' ? <Footer/> : null
      }
      </CitaContext.Provider>
      </UserContext.Provider>
    </div>
  );
}      

export default App;