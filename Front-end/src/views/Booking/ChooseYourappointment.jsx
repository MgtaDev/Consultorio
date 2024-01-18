import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import maps from '../../assets/maps.png'
import locationMark from '../../assets/locationMark.png'
import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import {FaCalendar, FaUser} from 'react-icons/fa'
import Modal from "react-modal";
import { useDispatch, useSelector } from 'react-redux'
import { allCitas, allMedicos } from '../../redux/actions'
import CitaContext from '../../context/CitaContext'


Modal.setAppElement("#root");
const ChooseYourappointment = ({setCita}) => {
  const { Cita } = useContext(CitaContext) 
  console.log(Cita);

    const horas = [
      '1:00pm',
      '200pm',
      '3:00pm',
      '4:00pm',
      '5:00pm',
      '6:00pm',
      '7:00pm',
    ]
    const fechas = [
      '10/01/2024',
      '11/01/2024',
      '12/01/2024',
      '13/01/2024',
      '14/01/2024',
      '15/01/2024',
      '16/01/2024',
      '17/01/2024',
    ]


    const [showHours, setshowHours] = useState(false)
    const [showDate, setshowDate] = useState(false)


    const navigate = useNavigate()
    const Medicos = useSelector(state => state?.allMedicos);
    console.log(Medicos);
    const [showCalendar, setshowCalendar] = useState(false)
    const handleModalClose = () => {
        setshowCalendar(false); // Cambia el estado para ocultar la modal
      };
      const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(allMedicos())
        dispatch(allCitas())
    },[])

    const loadHora = (hora) => {
      navigate('/scheduling-for')
      setCita({
        ...Cita,
        hora: hora
      })
    }

    const loadFecha = (fecha, medico_name, medicoId) => {
      setshowHours(true)
      setCita({
        ...Cita,
        fecha: fecha,
        medico_name: medico_name,
        medicoId: medicoId
      })
    }

    const [value, onChange] = useState(new Date());
    const animatedStyle1 = useSpring({
        from: { opacity: 0, marginLeft: -200 },
        to: { opacity: 1, marginLeft: 0 },
        delay: 700,
      });

      const animatedStyle2 = useSpring({
        from: { opacity: 0, marginRight: -200 },
        to: { opacity: 1, marginRight: 0 },
        delay: 500,
      });

      const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "90%",
          maxHeight: "80vh",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: "50",
        },
      };




  return (

    // Main container
    <div className="grid grid-cols-12 bg-white">
   


   {/* Left container */}
    <div className="col-span-6 elemento w-full h-full justify-center ">
    <animated.div style={animatedStyle2}>
    <div className='flex w-full py-4 px-5  bg-gray-100'>
        <p className='text-xs relative left-[24%]'>Estos intervalos de tiempo estan en la zona horaria <span className='font-bold'>Centra Standard Timer 4:52 PM</span></p>
    </div>
    <div className='mx-5 flex flex justify-center my-7 py-2 px-3 h-8 items-center'>
         <img src={logo} className='w-[300px] relative -top-8 mt-40' alt="" />
    </div>
    </animated.div>
 


    <animated.div style={animatedStyle1}>
    <div className='mt-[22%]'>
    <h2 className='text-3xl mx-5 my-7 text-gray-700 font-bold'>Seleccione una cita</h2>
    </div>

    <div className='flex p-8 border-b-2 border-t-2 w-full  '>
    <div>
        <img src={locationMark} className='h-20 w-20' alt="" />
    </div>
    <div>
        <h5 className='text-gray-400'>Ubicacion</h5>
        <h3 className='font-semibold'>Dental Care</h3>
        <p className='text-sm mt-1 '>6811 W. 121st Street <br />
        Overland Park, KS, 66209
        </p>
        <span className='text-sm text-blue-500'>0412-1968978</span>
    </div>
    </div>

    <div className=''>
        <div className='flex justify-center mt-4 items-center'>
        <button className='flex items-center m-3 rounded-full px-4 py-3 bg-gray-200'>
        <p onClick={()=> setshowCalendar(true)} className='text-center flex justify-center'>Seleccione Fecha</p>
        <span className='text-gray-500 px-2'><FaCalendar/></span>
        </button>
        </div>
      
    {
        showCalendar && (
            <Modal
            isOpen={showCalendar}
            onRequestClose={handleModalClose}
            style={customStyles}
          >
            <Calendar onChange={onChange} value={value} />
            </Modal>
        )
    }
    {
        Medicos && (
            Medicos?.map((medico)=> (
                <div className='flex hover:bg-gray-100 transition duration-1s cursor-pointer ease-in-out border-b-2 py-10 justify-around'>
                    <div className='flex mx-5 items-center gap-2'>
                        <div className='rounded-full bg-gray-200 p-3'>
                        <FaUser className='text-gray-600'/>
                        </div>
                        <div>
                        <h2 className='text-gray-400'>{medico.especialidad}</h2>
                        <h4 className='text-gray-700'>{medico.name}</h4>
                        </div>
                  
                    </div>

                    <div>
                      {
                        showHours ? 
                        (
                          horas.map((hora)=>(
                            <button onClick={()=> loadHora(hora)} className='my-2 rounded-full text-sm bg-gray-100 border-2 mx-2 relative left-10 px-4 py-2'>{hora}</button>
                          ))
                        )
                        : 
                          <button onClick={(e)=> loadFecha(e.target.value, medico.name, medico.id)} value='11/01/2024' className='my-2 rounded-full text-sm bg-gray-200  px-4 py-2'>Siguiente disponibilidad: <span className='font-bold text-xs'>11/01/2024</span></button>
                        
                      }
                    </div>

                </div>
            ))
        )
    }
    </div>  

  

   

    </animated.div>
  
    <animated.div style={animatedStyle1}>
    <div className='text-center mb-5 mt-[50%]'>
    <h3 className='text-md text-gray-500'>Designed By PassantinoDev</h3>
    <p className='text-xs text-gray-500'>Powered by React. @2023</p>
    </div> 
    </animated.div>   
    </div>





    {/*Right Container */} 
    <div className="col-span-6 ">
      <img src={maps} alt="Foto de ejemplo" className="w-full h-[100%] " />
    </div>
  </div>
  )
}

export default ChooseYourappointment