import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { BsCheckCircle } from 'react-icons/bs';
import { BsXCircle } from 'react-icons/bs';
import axios from "axios";
import { useSpring, animated } from 'react-spring';

import Swal from 'sweetalert2'
import { allCitas, allMedicos } from "../../redux/actions";
import { FaSearch } from "react-icons/fa";


const HistorialCitas = () => {
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
    const dispatch = useDispatch()
    const stateCitas = useSelector(state => state.allCitas);
    useEffect(()=>{
      dispatch(allCitas())
  },[])
  const [Citas, setCitas] = useState(true);
  const [Historial, setHistorial] = useState(false);
    const [selectedVenta, setSelectedVenta] = useState(null);
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedPage, setSelectedPage] = useState(1)
    const [itemsPerPage] = useState(9)
    const lastSale = currentPage * itemsPerPage;
    const firtsSale = lastSale - itemsPerPage
    const currentSales = stateCitas?.slice(firtsSale,lastSale)
    const [pageNumber, setPageNumber] = useState(0);
    const generatePageNumbers = () => {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(stateCitas?.length / itemsPerPage); i++) {
      pageNumbers.push({number:i, selected: i === selectedPage});
    }
    return pageNumbers;
  };
    const handlePrevPage = () => {
      setCurrentPage(currentPage - 1 );
      setSelectedPage(selectedPage - 1);
    };
    
    const handleNextPage = () => {
      setCurrentPage(currentPage + 1 );
      setSelectedPage(selectedPage + 1);
    };
    
    
  const pageNumbers = generatePageNumbers();
    const handlerPageNumber = (index) => {
      setPageNumber(index);
    };
  
    console.log(stateCitas);
  
    const handleVerClick = (venta, index) => {
      setSelectedVenta({ ...venta, index });
    };
  
    const handleCloseModal = (e) => {
        setSelectedVenta(null);
    };
  
   console.log(currentSales)
  const redirigirAlInicio = () => {
    window.scrollTo(0, 0);
  }

  return (
   
    <>
      <animated.div style={animatedStyle1}>
      <div className="flex items-center gap-5">
      <h2 className=" text-[50px] text-gray-500 m-5 ">Historial de citas</h2>
      <input
      placeholder="Busca una cita aqui"
        className=" flex bg-gray-100 rounded-lg w-[500px] px-5 py-1 border border-200 justify-end">
      </input>
        <FaSearch className="text-gray-500 cursor-pointer "/> 
        <select className="w-20 bg-gray-100  border border-200" name="" id="">
        <option value="Filtrar por estado">Estado</option>
        </select>
      
        <select className="w-20 bg-gray-100  border border-200" name="" id="">
        <option value="Filtrar por fecha">Fecha</option>
         </select>

        </div>
        </animated.div>

        <animated.div style={animatedStyle2}>
        {currentSales?.length > 0 ?     <table className="w-full rounded-lg overflow-hidden">
        <thead className="bg-gray-100 shadow-lg uppercase text-sm leading-normal">
          <tr className="text-gray-600">
            <th className="border-0 px-6 py-4 font-bold">ID</th>
            <th className="border-0 px-6 py-4 font-bold">Nombre cliente</th>
            <th className="border-0 px-6 py-4 font-bold">Medico asignado</th>
            <th className="border-0 px-6 py-4 font-bold">Fecha</th>
            <th className="border-0 px-6 py-4 font-bold">Hora</th>
            <th className="border-0 px-6 py-4 font-bold">Descripcion</th>
            <th className="border-0 px-6 py-4 font-bold">Estado</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {currentSales.map((cita) => (
            <tr key={cita.id} className="border-t">
              <td className="px-6 capitalize text-center capitalize py-10">#0{cita.id}</td>
              <td className="px-6 capitalize text-center capitalize py-10">{cita.cliente_name}</td>
              <td className="px-6 capitalize text-center py-10">{cita.medico_name}</td>
              <td className="px-6 capitalize text-center py-10">{cita.fecha}</td>
              <td className="px-6 capitalize text-center py-10">{cita.hora}</td>
              <td className="px-6 capitalize text-center py-10">{cita.descripcion}</td>
              <td className="px-6 capitalize text-center py-10">{cita.estado}</td>
              <td className="px-6 capitalize text-center py-10"><button className="bg-green-400 rounded-lg py-1 text-white px-4 border border-gray-200 font-bold" onClick={handleVerClick}>Ver</button></td>
              
            </tr>
          ))}
        </tbody>
      </table> 
      : <h2 className="text-lg text-gray-500 flex justify-center py-10 ">No hay citas en estos momentos</h2>}
  </animated.div>

  {selectedVenta && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4" onMouseDown={handleCloseModal}>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>

            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full max-h-screen z-10">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium capitalize text-gray-900">{selectedVenta.productoName}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">ID #00{selectedVenta.index}</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                    <dt className="text-sm font-medium text-gray-500">Id</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedVenta.id}</dd>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                    <dt className="text-sm font-medium text-gray-500">Cliente</dt>
                    <dd className="mt-1 text-sm text-gray-900 capitalize sm:mt-0 sm:col-span-2">{selectedVenta.cliente_name}</dd>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                    <dt className="text-sm font-medium text-gray-500">Medico encargado</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedVenta.medico_name}</dd>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                    <dt className="text-sm font-medium text-gray-500">Motivo</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedVenta.descripcion}</dd>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                    <dt className="text-sm font-medium text-gray-500">Fecha</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedVenta.fecha}</dd>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                    <dt className="text-sm font-medium text-gray-500">Hora</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedVenta.hora}</dd>
                  </div>
                  {/* ... más datos de ventas aquí */}
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}

    
        </>
      );
};

export default HistorialCitas;

