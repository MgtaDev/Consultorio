import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { useSpring, animated } from 'react-spring';
import { FaArrowLeft, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CitaContext from '../../context/CitaContext'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
const BookingDetails = ({setCita}) => {
  const { Cita } = useContext(CitaContext) 
  console.log(Cita);

  function redirigirAlInicio() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


    const animatedStyle1= useSpring({
      from: { opacity: 0, },
      to: { opacity: 1, },
      delay: 500,
    });
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loadClientNanme = (nombre) => {
      const { datos_del_paciente } = Cita; // Accedo al objeto datos_del_paciente para crear la copia
      const newClientData = { ...datos_del_paciente }; // Creo una copia del objeto datos_del_paciente utilizando la sintaxis de propagación de objetos
      newClientData.nombre = nombre; // Actualizo solo el campo que se cambió
      setCita({ ...Cita, datos_del_paciente: newClientData }); // Actualizo el objeto Cita con la nueva copia
    }
    
    const loadClientLastName = (  apellido ) => {
      const newClientData = { ...Cita.datos_del_paciente }; 
      newClientData.apellido = apellido; 
      setCita({ ...Cita, datos_del_paciente: newClientData }); 
    }

    const loadClientEmail = ( email ) => {
      const newClientData = { ...Cita.datos_del_paciente }; 
      newClientData.email = email;
      setCita({ ...Cita, datos_del_paciente: newClientData }); 
    }

    const loadClientNumber = (numero ) => {
      const newClientData = { ...Cita.datos_del_paciente }; 
      newClientData.numero_telefono = numero; 
      setCita({ ...Cita, datos_del_paciente: newClientData }); 
    }

    const loadClientDNI = ( DNI ) => {
      const newClientData = { ...Cita.datos_del_paciente };
      newClientData.cedula_identidad = DNI; 
      setCita({ ...Cita, datos_del_paciente: newClientData });
    }

    const loadClientBirth = (  fecha_nacimiento ) => {
      const newClientData = { ...Cita.datos_del_paciente };
      newClientData.fecha_nacimiento = fecha_nacimiento;
      setCita({ ...Cita, datos_del_paciente: newClientData });
    }

    const loadClientGender = (  genero ) => {
      const newClientData = { ...Cita.datos_del_paciente }; 
      newClientData.genero = genero; 
      setCita({ ...Cita, datos_del_paciente: newClientData }); 
    }

    const setComentario = (comentario) => {
      setCita({ ...Cita, descripcion: comentario});
    }


    const createCita = async () => {
      navigate('/')
      await axios.post('http://localhost:3001/cita', Cita)
      toast.success('Cita Creada con exito', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      redirigirAlInicio()
    }

  
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
            <label className='text-gray-700 font-bold mb-1' htmlFor="name">Nombre</label>
            <input name='name' onChange={(e)=> loadClientNanme(e.target.value)} type="text" className='border py-2 px-2  rounded-md ' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="">Email</label>
            <input name='email' onChange={(e)=> loadClientEmail(e.target.value)} type="text" className='border py-2 px-2  rounded-md mt-8' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="DNI">Cedula de identidad</label>
            <input name='DNI' onChange={(e)=> loadClientDNI(e.target.value)} type="text" className='border py-2 px-2  rounded-md mt-8' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="fecha">Fecha de nacimiento</label>
            <input name='fecha' onChange={(e)=> loadClientBirth(e.target.value)} type="text" className='border py-2 px-2  rounded-md mt-8' />

            </div>
            <div className='col-span-2' id='details'>
            <label className='text-gray-700 font-bold mb-1' htmlFor="">Apellido</label>
            <input name='apellido' onChange={(e)=> loadClientLastName(e.target.value)} type="text" className='border py-2 px-2  rounded-md ' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="numero">Numero de Telefono</label>
            <input name='numero' onChange={(e)=> loadClientNumber(e.target.value)} type="text" className='border py-2 px-2  rounded-md mt-8' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="genero">Genero</label>
            <input name='genero' onChange={(e)=> loadClientGender(e.target.value)} type="text" className='border py-2 px-2  rounded-md mt-8' />
            <label className='text-gray-700 font-bold mb-1 relative top-7' htmlFor="comentarios">Comentarios (opcional)</label>
            <input name='comentarios' onChange={(e)=> setComentario(e.target.value)}  type="text" className='border py-2 px-2  rounded-md mt-8' />
            

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
            <button onClick={()=> createCita()} className='radiant text-white px-2 py-2 rounded-lg my-2 font-bold'>Reservar Cita</button>
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