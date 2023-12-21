import React from 'react'
import logo from '../../assets/logo.png'
import { useSpring, animated } from 'react-spring';
import { FaArrowLeft, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BookingDetails = () => {

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
          <button onClick={() => navigate(-1)} className='flex items-center mb-4 gap-1'><FaArrowLeft className='text-gray-500'/>Regresar</button>
          <h3 className='text-gray-700 font-bold text-3xl mb-10'>Por favor llenar con su informacion exacta</h3>
          
        <div className='grid grid-cols-6'>
            <div className='col-span-2' id='form'>
            <label className='text-gray-700 font-bold mb-1' htmlFor="">Nombre</label>
            <input type="text" className='border py-2 px-2  rounded-md ' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="">Email</label>
            <input type="text" className='border py-2 px-2  rounded-md mt-8' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="">Codigo Postal</label>
            <input type="text" className='border py-2 px-2  rounded-md mt-8' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="">Fecha de nacimiento</label>
            <input type="text" className='border py-2 px-2  rounded-md mt-8' />

            </div>
            <div className='col-span-2' id='details'>
            <label className='text-gray-700 font-bold mb-1' htmlFor="">Apellido</label>
            <input type="text" className='border py-2 px-2  rounded-md ' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="">Numero de Telefono</label>
            <input type="text" className='border py-2 px-2  rounded-md mt-8' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="">Genero</label>
            <input type="text" className='border py-2 px-2  rounded-md mt-8' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="">Comentarios (opcional)</label>
            <input type="text" className='border py-2 px-2  rounded-md mt-8' />
            

            </div>
            <div className='col-span-2' id='details'>
            <p className='mx-1 font-bold' htmlFor="">Detalles de la cita</p>
            <div className='carta w-[300px] px-8 py-4 lightBlue rounded-lg'> 
            <div className='top mb-8'>
            <h4>Cita</h4>
            <p className='text-sm font-bold'>Nuevo paciente/ Revision</p>
            <p>Fecha</p>
            </div>
            <div className='bottom mb-8'>
            <h4>Direccion</h4>
            <p className='text-sm font-bold'>Dental care</p>
            <p className='text-sm'>6811 W. 121st Street
            Overland Park, KS 66209
            </p>
            </div>
            
         
            <div className='flex items-center gap-2'>
                        <div className='rounded-full bg-gray-200 p-3'>
                        <FaUser className='text-gray-600'/>
                        </div>
                        <div>
                        <h2 className='text-gray-400'>Pediatra</h2>
                        <h4 className='text-gray-700  font-bold'>Maggie</h4>
                        </div>
                  
            </div>


          

            </div>
            <div className='flex justify-center pl-20'>
            <button className='radiant text-white px-2 py-2 rounded-lg my-2 font-bold'>Reservar Cita</button>
            </div>

            </div>

        </div>






        </div>
        </div>
       
  
        <div className='text-center mt-[11%] mb-10 '>
          <h3 className='text-md text-gray-500'>Designed By PassantinoDev</h3>
          <p className='text-xs text-gray-500'>Powered by React. @2023</p>
        </div>
  
      </animated.div>
    )
  }

export default BookingDetails