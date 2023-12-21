import React, { useState } from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/google-logo.png'
import githubLogo from '../../assets/github-logo.png'
import logo from '../../assets/logo.png'
import { useSpring, animated } from 'react-spring'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';;



const SignIn = () => {

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

const handleSignIn = async () => {
  try {
    const { email, password } = formValues;
    await createUserWithEmailAndPassword(firebaseAuth, email, password).then(()=>{
      toast.success('Registrado exitosamente', {
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
    console.log(error);
  }
};


  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/login");
  });

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  console.log(formValues);

  return (
    <div className="grid grid-cols-12 bg-white">
    {/* Formulario */}
    <div className="col-span-6 w-full h-[100%] justify-center p-4 ">
    <animated.div style={animatedStyle1} id='form' className=''>

    <div id='top' className='text-center mt-[7%] justify-center'>
    <h4 className='font-semibold text-xl'>REGISTRATE</h4>
    <p className='text-sm mb-4 text-gray-600'>Dental care, your favorite booking app.</p>
    <input placeholder='Nombre' className='py-3 px-2 text-sm w-[65%] rounded-md bg-blue-50' type="text"/>
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
    <button onClick={handleSignIn} className='bg-green-400 hover:bg-green-600 transition duration-1s cursor-pointer ease-in-out text-white rounded-xl px-3 py-2 mb-3 font-medium'>Crear Cuenta</button>
    <ToastContainer/>
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

export default SignIn