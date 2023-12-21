import React, { useState } from 'react'
import maps from '../../assets/maps.png'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase-config';


const Booking = () => {

    const [showSecondQuestion, setshowSecondQuestion] = useState(false)
    
    const navigate = useNavigate()
    const changeQuestionState1 = ()=> {
        setshowSecondQuestion(true)
    }
  
    const goSignIn = ()=> {
    navigate('/signin')
        
    }
    const goLogIn = ()=> {
    navigate('/login')
    }

    const animatedStyle1 = useSpring({
        from: { opacity: 0, marginLeft: -200 },
        to: { opacity: 1, marginLeft: 0 },
        delay: 700,
      });
      
      const animatedStyle2 = useSpring({
        from: { opacity: 0, marginBottom: -200 },
        to: { opacity: 1, marginBottom: 0 },
        delay: 500,
      });

            
      const animatedStyle3 = useSpring({
        from: { opacity: 0, margintBottom: 0 },
        to: { opacity: 1, marginBottom: 200 },
        delay: 500,
      });

    return (
        <div className="grid grid-cols-12 bg-white">
          <div className="col-span-6  w-full h-full justify-center p-4 ">
        <animated.div style={animatedStyle2}>
        <div className='mx-5 flex flex justify-center my-4 py-2 px-3 h-8 items-center'>
        <img src={logo} className='w-[300px] relative -top-8 mt-40' alt="" />
        </div>
        </animated.div>
         

        <animated.div style={animatedStyle1}>  
        <div className='flex flex-col mt-40'>
        <h2 className='text-2xl mx-20 text-gray-700 font-bold'>Que tipo de cita desea realizar?</h2>
        <div className=' my-4 text-center'>
        <button onClick={ ()=>changeQuestionState1()} className='bg-gray-200 rounded-md px-2 font-semibold text-lg py-3 w-[80%]'>Nuevo Paciente / Revision</button>
        <button onClick={ ()=>changeQuestionState1()} className='bg-gray-200 rounded-md mt-3  font-semibold text-lg px-2 py-3 w-[80%]'>Antiguo paciente / Limpieza</button>
        </div>
        </div>
        </animated.div>
      

        {
            showSecondQuestion ? (
                <animated.div style={animatedStyle1}> 
                <div className='flex flex-col mt-10'>
                <h2 className='text-2xl mx-20 text-gray-700 font-bold'>¿Es un paciente nuevo o existente?</h2>
                <div className=' my-4 text-center'>
                <button onClick={()=> goSignIn()} className='bg-gray-200 rounded-md px-2 font-semibold text-lg py-3 w-[80%]'>Nuevo</button>
                <button onClick={()=> goLogIn()} className='bg-gray-200 rounded-md mt-3  font-semibold text-lg px-2 py-3 w-[80%]'>Existente</button>
                </div>
                </div>
                 </animated.div>
            ) 
            : ''
        }
     
        <animated.div style={animatedStyle3}> 
        <div className='text-center mt-[50%]'>
        <h3 className='text-md text-gray-500'>Designed By PassantinoDev</h3>
        <p className='text-xs text-gray-500'>Powered by React. @2023</p>
        </div>
        </animated.div>





          </div>

            {/* Mapas */}
          <div className="col-span-6 ">
            <img src={maps} alt="Foto de ejemplo" className="w-full h-full " />
          </div>
        </div>
      );
}

export default Booking