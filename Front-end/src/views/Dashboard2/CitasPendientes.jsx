import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allCitas } from '../../redux/actions';
import { FaCalendarCheck, FaClock, FaSearch, FaUser } from 'react-icons/fa';
import { BsCheckCircle, BsFillCalendarFill, BsXCircle } from 'react-icons/bs';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

const CitasPendientes = () => {
    const dispatch = useDispatch()
    const stateCitas = useSelector(state => state?.allCitas);
    useEffect(()=>{
      dispatch(allCitas())
  },[])
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

    const atenderCita = (id, clienteId, medicoId)=> {
        axios.put(`http://localhost:3001/cita/${id}`, {estado: "cancelada"}) 
    }
    const cancelarCita = (id, clienteId, medicoId)=> {
        axios.put(`http://localhost:3001/cita/${id}`, {estado: "atendida"}) 
    }

  
   console.log(currentSales)
  return (
    <>
    <animated.div style={animatedStyle1}>
    <div className="flex items-center gap-10">
<h2 className=" text-[50px] text-gray-500 m-5 ">Citas</h2>
  </div>
    </animated.div>

<animated.div style={animatedStyle2}>
<h4 className=" text-sm text-gray-500 px-12 ">Citas pendientes: ({stateCitas?.length})</h4>
<div className="flex justify-center flex-wrap gap-10 mx-10 my-5">
 {currentSales?.length !== 2 ? (
     currentSales?.map((cita)=>(
      
<div key={cita.id}  className="shadow-lg px-10 py-10 rounded-lg border border-gray">
             <div>
                 <div className="flex items-center gap-5">
                     <FaUser className="w-10 text-gray-400  h-10 rounded-full border border-gray-200" />
                     <div className="flex flex-col">
                         <h5 className="font-bold ">{cita.cliente_name}</h5>
                         <span className="text-xs text-gray-400 font-bold">{cita.medico_name}</span>
                     </div>


                 </div>

                 <p className="flex text-sm mt-5 text-gray-700 items-center font-bold"> <BsFillCalendarFill className="text-gray-400 mr-2" /> Estado: <span className="text-xs  font-bold  px-2 py-1 capitalize ml-2 text-gray-700">{cita.estado}</span></p>
                 <p className="flex text-sm mt-2 text-gray-700 items-center font-bold"> <FaCalendarCheck className="text-gray-400 mr-2" /> Fecha: <span className="text-xs font-bold px-2 py-1 capitalize ml-2 ">{cita.fecha}</span></p>
                 <p className="flex text-sm mt-2 text-gray-700 items-center font-bold"> <FaClock className="text-gray-400 mr-2" /> Hora: <span className="text-xs font-bold px-2 py-1 capitalize ml-2 ">8:00am</span></p>
             </div>

             <div className="flex gap-20 mt-8">
                 <span onClick={() => cancelarCita(cita.id, cita.clienteId, cita.medicoId)} className="text-xs text-white font-bold px-2 py-1 capitalize ml-2 rounded-lg bg-red-400 cursor-pointer hover:transition-3s ease-in-out  hover:bg-white hover:text-red-400  ">Cancelar</span>
                 <span onClick={() => atenderCita(cita.id, cita.clienteId, cita.medicoId)} className="text-xs text-white font-bold px-2 py-1 capitalize ml-2 rounded-lg bg-green-400 cursor-pointer hover:transition-3s ease-in-out   hover:bg-white hover:text-green-400   "> Atendida</span>
             </div>
         </div>
         
  ))
) :  <h2 className="text-lg text-gray-600 flex justify-center py-10 ">No hay citas en estos momentos</h2>}

</div>
</animated.div>
{
      currentSales?.length > 9 ? (
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
      ) : ''
    }



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
              <dt className="text-sm font-medium text-gray-500">Cliente</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedVenta.clienteName}</dd>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">Producto</dt>
              <dd className="mt-1 text-sm text-gray-900 capitalize sm:mt-0 sm:col-span-2">{selectedVenta.productoName}</dd>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">Monto</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedVenta.productoPrecio * selectedVenta.cantidad}$</dd>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">Cantidad</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedVenta.cantidad} und</dd>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">Fecha de compra</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedVenta.fechaCompra.split(',')[0]}</dd>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm font-medium text-gray-500">Hora</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{selectedVenta.fechaCompra.split(',')[1]}</dd>
            </div>
            {/* ... más datos de ventas aquí */}
          </dl>
        </div>
      </div>
    </div>
  </div>
)}
</>
  )
}

export default CitasPendientes
 