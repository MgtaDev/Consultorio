import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import { citasPerCLiente } from '../../redux/actions';

const Detail = ({setHistorial, setDetalle, id, name, correo, cedula}) => {
    function redirigirAlInicio() {
        window.scrollTo({
          top: 10,
          behavior: 'smooth'
        });
      }
    const ultimaCitaPendiente = useSelector((state) => state?.allCitas?.filter((cita) => cita.estado === 'pendiente')?.[state?.allCitas?.filter((cita) => cita.estado === 'pendiente')?.length - 1]);
    console.log(ultimaCitaPendiente);
    const dispatch = useDispatch()
    const userCitas = useSelector(state => state.allCitas)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedPage, setSelectedPage] = useState(1)
    const [itemsPerPage] = useState(9)
    const lastSale = currentPage * itemsPerPage;
    const firtsSale = lastSale - itemsPerPage
    const currentSales = userCitas.slice(firtsSale,lastSale)
    const [pageNumber, setPageNumber] = useState(0);
    
    const generatePageNumbers = () => {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(userCitas?.length / itemsPerPage); i++) {
      pageNumbers.push({number:i, selected: i === selectedPage});
    }
    return pageNumbers;
  };
  const pageNumbers = generatePageNumbers();
   
    
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
                <p>{ultimaCitaPendiente.fecha}</p>
            </div>
            <div className="mb-2 flex">
                <BsCheckCircle className="mr-2" />
                <p className="text-green-500 font-semibold">{ultimaCitaPendiente.estado}</p>
            </div>
            <div className="mb-2 flex">
                <FaCalendarAlt className="mr-2" />
                <p>{ultimaCitaPendiente.hora}</p>
            </div>
            <div className="mb-2 flex">
                <FaUserCircle className="mr-2" />
                <p className="font-semibold">{ultimaCitaPendiente.medico_name}</p>
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
{userCitas ? currentSales?.map(cita => (
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
     {/* Pagination Buttons */}
     {
            userCitas?.length > 10 && (
          <div className="flex justify-center py-8">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  setSelectedPage(selectedPage - 1);
               
                }
              }}
              className="border-solid rounded-full w-10 h-10 rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950 "
            >
              {"<"}
            </button>
            {pageNumbers.map(({ number, selected }) => (
              <button
                key={number}
                onClick={() => {
                  setCurrentPage(number);
                  setSelectedPage(number);
               
                }}
              className={`border-solid rounded-full w-10 h-10 border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:white focus:border-white ${
              selected ? "bg-gray-400 text-white" : ""
                }`}
                >
                  
                {number}
              </button>
            ))}
            <button
              onClick={() => {
                if (currentPage < Math.ceil(currentSales?.length / itemsPerPage)) {
                  setCurrentPage(currentPage + 1);
                  setSelectedPage(selectedPage + 1);
              
                }
              }}
              className="border-solid rounded-full w-10 h-10  rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950"
              >
              {">"}
            </button>
          </div>
            )
          }
</section>
</div>
</div>
</div>
            </animated.div>
       
        </>
    );
};

export default Detail;