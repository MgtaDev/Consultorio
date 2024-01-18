import React, { useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider,sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { firebaseAuth, firestore } from '../../utils/firebase-config';
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaMailBulk } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import googleLogo from '../../assets/google-logo.png'
import githubLogo from '../../assets/github-logo.png'
import { ToastContainer, toast } from 'react-toastify';
import img from '../../assets/od.jpeg'
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../../context/UserContext' 



const AdminLogin = () => {
const { User } = useContext(UserContext) 
console.log(User);
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

const resetPassword = (email) => sendPasswordResetEmail(firebaseAuth,email)
const handleResetPassword = async () => {
  const email = 'passantinodev@gmail.com'
	try{
	await resetPassword(email)
	}
	catch(error){
	console.log(error.message)
	}
}

const [formValues, setFormValues] = useState({
  email: "",
  password: "",
});
console.log(formValues);

const handleLogin = async () => {
  const { email, password } = formValues;
  try {
  const infoUsuario = await signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((usuarioFirebase) => {
      return usuarioFirebase
      })
     
  } catch (error) {
    console.log(error.code);
  }
};



  return (
    <>
    <ToastContainer/>
         <div className="grid grid-cols-12 bg-white">
           
          {/* Formulario */}
          <div className="col-span-6 w-full h-[100%] justify-center p-4 ">
          <animated.div style={animatedStyle1} id='form' className=''>

          <div id='top' className='text-center mt-[15%] justify-center'>
          <div className='flex justify-center mt-10 mb-5'>
          <img src={logo} alt="logo" className='w-[400px] ml-4' />
          </div>
          <h4 className='font-semibold text-xl'>ADMIN LOGIN</h4>
          <p className='text-sm mb-4 text-gray-600'>Ingresa tus credenciales para acceder al panel de administrador</p>
          <input onChange={(e)=>setFormValues( {...formValues,email:e.target.value})} placeholder='Correo electronico' className='py-3 px-2 text-sm w-[65%] rounded-md bg-blue-50' type="text"/>
          <input onChange={(e)=>setFormValues({...formValues,password:e.target.value})} placeholder='Contraseña' className='py-3 px-2 w-[65%] text-sm rounded-md  bg-blue-50 mt-3' type="password"/>
          <p onClick={handleResetPassword} className='mt-4 text-sm font-medium text-green-500  hover:text-green-600 transition duration-1s cursor-pointer ease-in-out cursor-pointer'>Olvidaste tu contraseña?</p>
          </div>


          <div id='bottom' className='text-center mb-[19%]  mt-[2%]'>
          <button onClick={handleLogin} className='bg-green-400 hover:bg-green-600 transition duration-1s cursor-pointer ease-in-out text-white rounded-xl px-3 py-2 mb-3 font-medium'>Login Now</button>
       
          <div className='flex justify-center'>
        
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
            <div className="col-span-6">
      <animated.div style={animatedStyle2} className='flex h-[100%] justify-center'>
      <img src={img} alt="Foto de ejemplo" className="w-full h-[100%]  " />
       
      </animated.div>
    </div>
        </div>
    </>
  )
}

export default AdminLogin