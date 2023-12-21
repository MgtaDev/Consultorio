import React, { useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { firebaseAuth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaMailBulk } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import googleLogo from '../../assets/google-logo.png'
import githubLogo from '../../assets/github-logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogIn = () => {

const navigate = useNavigate();
const [password, setpassword] = useState('')
const [email, setemail] = useState('')
const animatedStyle1 = useSpring({
  from: { opacity: 0, },
  to: { opacity: 1,},
  delay: 700,
});
const animatedStyle2 = useSpring({
  from: { opacity: 0},
  to: { opacity: 1},
  delay: 500,
});

const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password).then(()=>{
      toast.success('Inicio de sesion exitoso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
  } catch (error) {
    console.log(error.code);
  }
};

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
   
  });


  
  return (
         <div className="grid grid-cols-12 bg-white">
          {/* Formulario */}
          <div className="col-span-6 w-full h-[100%] justify-center p-4 ">
          <animated.div style={animatedStyle1} id='form' className=''>

          <div id='top' className='text-center mt-[15%] justify-center'>
          <h4 className='font-semibold text-xl'>LOGIN</h4>
          <p className='text-sm mb-4 text-gray-600'>Dental care, your favorite booking app.</p>
          <input placeholder='Correo electronico' className='py-3 px-2 text-sm w-[65%] rounded-md bg-blue-50' type="text"/>
          <input placeholder='Contraseña' className='py-3 px-2 w-[65%] text-sm rounded-md  bg-blue-50 mt-3' type="password"/>
          <p className='mt-4 text-sm font-medium text-green-500  hover:text-green-600 transition duration-1s cursor-pointer ease-in-out cursor-pointer'>Olvidaste tu contraseña?</p>
          </div>


          <div id='bottom' className='text-center mb-[19%]  mt-[4%]'>
          <button onClick={handleLogin} className='bg-green-400 hover:bg-green-600 transition duration-1s cursor-pointer ease-in-out text-white rounded-xl px-3 py-2 mb-3 font-medium'>Login Now</button>
          <ToastContainer/>
          <p className='mt-3 text-sm font-semibold text-gray-500'>No tienes una cuenta?</p>
          <p onClick={()=> navigate('/signin')} className='text-sm mt-1 text-green-500  hover:text-green-600 transition duration-1s cursor-pointer ease-in-out cursor-pointer'>Registrate</p>
          <p className='text-xs mt-2 text-gray-500'>o</p>
          <div className='flex justify-center'>
          <button className='flex items-center px-4 py-2 shadow shadow-lg text-gray-700 text-sm mt-2 mr-4 rounded-full'>
            <img src={googleLogo} className='w-5 mx-1' alt="" />
            Inicia sesion con Google
            </button>
          <button className='flex items-center px-4 py-2 shadow shadow-lg text-gray-700 text-sm mt-2 rounded-full'>
            <img src={githubLogo} className='w-5 mx-1' alt="" />
            Inicia sesion con Github
            </button>
          </div>
         
          </div>

          </animated.div>
        <animated.div style={animatedStyle1}> 
        <div className='text-center'>
        <h3 className='text-mxs text-gray-500'>Designed By PassantinoDev</h3>
        <p className='text-xs text-gray-500'>Powered by React. @2023</p>
        </div>
        </animated.div>
          </div>

            {/* Welcome to*/}
          <div className="col-span-6 bg-green-400 ">
            <animated.div style={animatedStyle2} className='flex justify-center'>
              <div className='rounded-xl mt-20 px-20 py-40 bg-[#f9f9f971]'>
            <img src={logo} alt="Foto de ejemplo" className="w-[300px] py-8 rounded-full  " />
              </div> 
            </animated.div>
          </div>
        </div>
  )
}

export default LogIn