import React, { useEffect } from 'react';
import { FaUserCircle, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import { citasPerCLiente } from '../../redux/actions';

const Detail = ({setHistorial, setDetalle, id, name, correo, cedula}) => {
    const dispatch = useDispatch()
   
    const userCitas = useSelector(state => state.allCitas)
    const  navigate = useNavigate()
    const  location = useLocation()
    const animatedStyle1 = useSpring({
        from: { opacity: 0, marginTop: -200 },
        to: { opacity: 1, marginTop: 0 },
        delay: 500,
      });
    
      const animatedStyle2 = useSpring({
        from: { opacity: 0, marginTop: 50 },
        to: { opacity: 1, marginTop: 0 },
        delay: 1000,
      });
   
    const verHistorial = () => {
        setHistorial(true)
        setDetalle(false)
    }
    return (
        <>  
            <animated.div style={animatedStyle1}>
            <button onClick={verHistorial} className='bg-gray-400 text-white mx-6 my-3  px-4 py-1 rounded-lg'><FaArrowLeft/></button>
            <h2 className=" text-[50px] text-gray-500 mx-5 ">Datos del paciente y citas pendientes</h2>
            </animated.div>
      

            <animated.div style={animatedStyle2}>
            <div className="bg-gray-100 h-full">

{/* ---------------------- Datos del paciente y citas pendientes ---------------------- */}

<div className='mx-6'>  
<section className="w-full   py-6 px-4 mb-8 shadow-lg rounded-lg overflow-hidden">
    <div className="grid grid-cols-2 gap-4 text-gray-700">

        {/* ---------------------- Datos del paciente ---------------------- */}
        <div className="bg-white rounded-lg shadow-md px-4 py-6">
            <h3 className="text-lg font-bold mb-4">Datos del paciente</h3>
            <div className="mb-2 flex">
                <FaUserCircle className="mr-2" />
                <p>{name}</p>
            </div>
         
            <div className="mb-2 flex">
                <FaUserCircle className="mr-2" />
                <p>{cedula}</p>
            </div>
            <div className="mb-2 flex">
                <FaUserCircle className="mr-2" />
                <p>{correo}</p>
            </div>
        </div>

        {/* ---------------------- Citas pendientes ---------------------- */}
        <div className="bg-white rounded-lg shadow-md px-4 py-6">
            <h3 className="text-lg font-bold mb-4">Citas pendientes</h3>

            <div className="mb-2 flex">
                <FaCalendarAlt className="mr-2" />
                <p>21 de septiembre de 2021</p>
            </div>
            <div className="mb-2 flex">
                <BsCheckCircle className="mr-2" />
                <p className="text-green-500 font-semibold">Confirmada</p>
            </div>
            <div className="mb-2 flex">
                <FaCalendarAlt className="mr-2" />
                <p>10:00AM</p>
            </div>
            <div className="mb-2 flex">
                <FaUserCircle className="mr-2" />
                <p className="font-semibold">Dr. Hernández</p>
            </div>
        </div>
    </div>
</section>
</div>


{/* ---------------------- Historial de citas ---------------------- */}
<h2 className=" text-[50px] text-gray-500 mx-5 ">Historial de citas</h2>

<div className='mx-6'>
<div className='bg-gray-100 px-4 py-4 rounded-lg shadow shadow-lg'>
<section className="w-full bg-white py-6 px-4 mb-8 shadow-lg rounded-lg overflow-hidden">
<div className="overflow-x-auto">
{userCitas.length === 0 ? ( <div className='bg-gray-100 px-4 py-4 rounded-lg shadow shadow-lg'><h2 className="text-lg text-gray-600 flex justify-center py-10 ">No hay citas para este cliente</h2></div>
   
) : 
<table className="w-full table-fixed" style={{tableLayout: "fixed"}}>
<thead className="bg-gray-100 shadow-lg uppercase text-sm leading-normal">
<tr className="text-gray-600">
  <th className="border-0 px-6 py-4 font-bold w-1/4 align-middle text-center">Fecha</th>
  <th className="border-0 px-6 py-4 font-bold w-1/4 align-middle text-center">Hora</th>
  <th className="border-0 px-6 py-4 font-bold w-1/4 align-middle text-center">Médico</th>
  <th className="border-0 px-6 py-4 font-bold w-1/4 align-middle text-center">Motivo</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-300">
{userCitas ? userCitas?.map(cita => (
  <tr className="text-gray-900" key={cita.id}>
    <td className="w-1/4 py-3 px-4 align-middle text-center">{cita?.fecha}</td>
    <td className="w-1/4 py-3 px-4 align-middle text-center">{cita?.hora}</td>
    <td className="w-1/4 py-3 px-4 align-middle text-center">{cita?.medico_name}</td>
    <td className="w-1/4 py-3 px-4 align-middle text-center">{cita?.descripcion}</td>
  </tr>
)) : <h2 className="text-lg text-gray-600 flex justify-center py-10 ">No hay citas para este cliente</h2>}
</tbody>
</table>
}

</div>
</section>
</div>
</div>
</div>
            </animated.div>
       
        </>
    );
};

export default Detail;