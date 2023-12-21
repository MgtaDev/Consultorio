import React from 'react'
import logo from '../../assets/logo.png'
import { useSpring, animated } from 'react-spring';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// scheduling-for-details
// patient-details


const SchedulingFor = () => {

  const animatedStyle1= useSpring({
    from: { opacity: 0, },
    to: { opacity: 1, },
    delay: 500,
  });
  const navigate = useNavigate()

  return (
    <animated.div style={animatedStyle1} className='bg-white'>
      <div className='flex justify-center mt-10 mb-5'>
        <img src={logo} alt="logo" className='w-[400px]' />
      </div>

      <div className='flex justify-center'>  
      <div className='flex w-[50%] flex-col'>
        <button  onClick={() => navigate(-1)}  className='flex items-center mx-10 mb-4 gap-1'><FaArrowLeft className='text-gray-500'/>Regresar</button>
        <h3 className='text-gray-700 font-bold text-xl m-auto mb-10'>¿Esta programando esta cita para usted o 
         para otra persona?</h3>
        <button onClick={()=> navigate('/patient-details')} className='bg-gray-200 rounded-md px-2 m-auto font-semibold text-lg py-3 w-[80%]'>Programando para mi</button>
        <button onClick={()=> navigate('/scheduling-for-details')} className='bg-gray-200 rounded-md mt-3 m-auto font-semibold text-lg px-2 py-3 w-[80%]'>Programando para otra persona</button>
      </div>
      </div>
     

      <div className='text-center mt-[11%] '>
        <h3 className='text-md text-gray-500'>Designed By PassantinoDev</h3>
        <p className='text-xs text-gray-500'>Powered by React. @2023</p>
      </div>

    </animated.div>
  )
}

export default SchedulingFor;