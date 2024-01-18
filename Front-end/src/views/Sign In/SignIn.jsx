import React, { useContext, useState } from 'react'
import axios from 'axios'
import { onAuthStateChanged, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { firebaseAuth, firestore } from '../../utils/firebase-config';
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/google-logo.png'
import githubLogo from '../../assets/github-logo.png'
import logo from '../../assets/logo.png'
import { useSpring, animated } from 'react-spring'
import { ToastContainer, toast } from 'react-toastify';
import img from '../../assets/od.jpeg'
import 'react-toastify/dist/ReactToastify.css';import CitaContext from '../../context/CitaContext';
;



const SignIn = ({setCita, setUser}) => {

const navigate = useNavigate()

const animatedStyle1 = useSpring({
  from: { opacity: 0,},
  to: { opacity: 1, },
  delay: 700,
});
const animatedStyle2 = useSpring({
  from: { opacity: 0 },
  to: { opacity: 1 },
  delay: 500,
});

const { Cita } = useContext(CitaContext) 
  console.log(Cita);



const registrarUsuario = async () => {
  const { email, password, name } = formValues;
  const clientDb = {
    email: email,
    correo_electronico: email,
    name: name,
    rol: "user",
  }
  try {
    const infoUsuario = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    const cliente = await axios.post('http://localhost:3001/cliente', clientDb)
    
      setCita({
        ...Cita, 
        cliente_name: cliente.data.name,
        clienteId: cliente.data.id
      })
      setUser({
        correo_electronico: cliente.correo_electronico,
        name: cliente.name,
        rol: "user",
        id: cliente.id
        })
      
      
  } catch (error) {
    console.log(error);
  }
};



  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/login");
  });

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
  });
  console.log(formValues);

  const loginWithGoogle = async () => {
    const { email, password, name } = formValues;
    const clientDb = {
      email: email,
      correo_electronico: email,
      name: name,
      rol: "user",
    }
    const googleProvider = new GoogleAuthProvider()
    await signInWithPopup(firebaseAuth, googleProvider)
    const cliente = await axios.post('http://localhost:3001/cliente', clientDb)
      setUser({
        correo_electronico: cliente.correo_electronico,
        name: cliente.name,
        rol: "user",
        id: cliente.id
        })
        setCita({
          ...Cita, 
          cliente_name: cliente.name,
          clienteId: cliente.id
        })
      
    }

    const loginWithGithub = async () => {
      const { email, password, name } = formValues;
      const clientDb = {
        correo_electronico: email,
        name: name,
        rol: "user",
      }
      const githubProvider = new GithubAuthProvider()
      await signInWithPopup(firebaseAuth, githubProvider)
      const cliente = await axios.post('http://localhost:3001/cliente', clientDb)
      setUser({
        correo_electronico: cliente.correo_electronico,
        name: cliente.name,
        rol: "user",
        id: cliente.id
        })
        setCita({
          ...Cita, 
          cliente_name: cliente.name,
          clienteId: cliente.id
        })
    
      
      }
  

  return (
    <div className="grid grid-cols-12 bg-white">
    {/* Formulario */}
    <div className="col-span-6 w-full h-[100%] justify-center p-4 ">
    <animated.div style={animatedStyle1} id='form' className=''>
    <div className='flex justify-center mt-10'>
          <img src={logo} alt="logo" className='w-[400px] ml-4' />
          </div>
    <div id='top' className='text-center mt-[4%] justify-center'>
    <h4 className='font-semibold text-xl'>REGISTRATE</h4>
    <p className='text-sm mb-4 text-gray-600'>Dental care, your favorite booking app.</p>
    <input onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    name: e.target.value,
                  })
                }
                  placeholder='Nombre' className='py-3 px-2 text-sm w-[65%] rounded-md bg-blue-50' type="text"/>
    <input placeholder='Correo electronico' className='py-3 px-2 text-sm w-[65%] rounded-md bg-blue-50 mt-3' type="text"/>
    <input placeholder='Contraseña' className='py-3 px-2 w-[65%] text-sm rounded-md  bg-blue-50 mt-3' type="password"/>
    <input  onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    email: e.target.value,
                  })
                } placeholder='Confirmar Correo' className='py-3 px-2 text-sm w-[65%] rounded-md bg-blue-50  mt-3' type="text"/>
    <input  onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    password: e.target.value,
                  })
                } placeholder='Confirmar Contraseña' className='py-3 px-2 w-[65%] text-sm rounded-md  bg-blue-50 mt-3' type="password"/>

    </div>


    <div id='bottom' className='text-center mb-[11.2%] mt-[4%]'>
    <button onClick={registrarUsuario} className='bg-green-400 hover:bg-green-600 transition duration-1s cursor-pointer ease-in-out text-white rounded-xl px-3 py-2 mb-3 font-medium'>Crear Cuenta</button>
    <ToastContainer/>
    <div className='flex justify-center'>
    <button  onClick={()=>loginWithGoogle()} className='flex items-center px-4 py-2 shadow shadow-lg text-gray-700 text-sm mt-2 mr-4 rounded-full'>
      <img src={googleLogo} className='w-5 mx-1' alt="" />
      Inicia sesion con Google
      </button>
    <button onClick={()=>loginWithGithub()}  className='flex items-center px-4 py-2 shadow shadow-lg text-gray-700 text-sm mt-2 rounded-full'>
      <img src={githubLogo} className='w-5 mx-1' alt="" />
      Inicia sesion con Github
      </button>
    </div>
    <p className='text-sm mt-1 text-gray-500 mt-6'>Ya tienes una cuenta? <span onClick={()=> navigate('/login')} className='text-sm text-green-500  hover:text-green-600 transition duration-1s cursor-pointer '>Login</span></p>
   
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
    <div className="col-span-6 ">
      <animated.div style={animatedStyle2} className='flex h-[100%] justify-center'>
      <img src={img} alt="Foto de ejemplo" className="w-full h-[100%]  " />
       
      </animated.div>
    </div>
  </div>
  )
}

export default SignIn