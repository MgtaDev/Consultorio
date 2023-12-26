import React, { useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider,sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaMailBulk } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import googleLogo from '../../assets/google-logo.png'
import githubLogo from '../../assets/github-logo.png'
import { ToastContainer, toast } from 'react-toastify';
import img from '../../assets/od.jpeg'
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
    if (currentUser) navigate("/booking/choosing");
   
  });

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(firebaseAuth, googleProvider)
    }

  const handleGoogleLogin = async()=>{
    try{
    await loginWithGoogle().then(()=>{
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
    }
    catch(error){
    console.log(error.message)
    }
  }

  const loginWithGithub = () => {
    const githubProvider = new GithubAuthProvider()
    signInWithPopup(firebaseAuth, githubProvider)
    }


  const handleGithubLogin = async()=>{
    try{
    await loginWithGithub().then(()=>{
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
    }
    catch(error){
    console.log(error.message)
    }
  }
  
  return (
    <>
    <ToastContainer/>
         <div className="grid grid-cols-12 bg-white">
           
          {/* Formulario */}
          <div className="col-span-6 w-full h-[100%] justify-center p-4 ">
          <animated.div style={animatedStyle1} id='form' className=''>

          <div id='top' className='text-center mt-[15%] justify-center'>
          <h4 className='font-semibold text-xl'>LOGIN</h4>
          <p className='text-sm mb-4 text-gray-600'>Dental care, your favorite booking app.</p>
          <input placeholder='Correo electronico' className='py-3 px-2 text-sm w-[65%] rounded-md bg-blue-50' type="text"/>
          <input placeholder='Contraseña' className='py-3 px-2 w-[65%] text-sm rounded-md  bg-blue-50 mt-3' type="password"/>
          <p onClick={handleResetPassword} className='mt-4 text-sm font-medium text-green-500  hover:text-green-600 transition duration-1s cursor-pointer ease-in-out cursor-pointer'>Olvidaste tu contraseña?</p>
          </div>


          <div id='bottom' className='text-center mb-[19%]  mt-[4%]'>
          <button onClick={handleLogin} className='bg-green-400 hover:bg-green-600 transition duration-1s cursor-pointer ease-in-out text-white rounded-xl px-3 py-2 mb-3 font-medium'>Login Now</button>
       
          <p className='mt-3 text-sm font-semibold text-gray-500'>No tienes una cuenta?</p>
          <p onClick={()=> navigate('/signin')} className='text-sm mt-1 text-green-500  hover:text-green-600 transition duration-1s cursor-pointer ease-in-out cursor-pointer'>Registrate</p>
          <p className='text-xs mt-2 text-gray-500'>o</p>
          <div className='flex justify-center'>
          <button onClick={()=> handleGoogleLogin()} className='flex items-center px-4 py-2 shadow shadow-lg text-gray-700 text-sm mt-2 mr-4 rounded-full'>
            <img src={googleLogo} className='w-5 mx-1' alt="" />
            Inicia sesion con Google
            </button>
          <button onClick={()=>handleGithubLogin()} className='flex items-center px-4 py-2 shadow shadow-lg text-gray-700 text-sm mt-2 rounded-full'>
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
            <div className="col-span-6">
      <animated.div style={animatedStyle2} className='flex h-[100%] justify-center'>
      <img src={img} alt="Foto de ejemplo" className="w-full h-[100%]  " />
       
      </animated.div>
    </div>
        </div>
    </>
  )
}

export default LogIn