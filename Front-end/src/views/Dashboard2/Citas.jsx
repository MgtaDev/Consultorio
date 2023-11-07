import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCitas, } from "../../redux/actions";
import MiFoto from '../../assets/ProfilePic.jpeg'
import { FaCalendar, FaCalendarCheck, FaCalendarTimes, FaClock, FaSearch, FaUser } from "react-icons/fa";
import { BsCheckCircle, BsFillCalendarFill, BsXCircle } from "react-icons/bs";
import CitasPendientes from './CitasPendientes'
import Historial from './HistorialCitas'
import HistorialCitas from "./HistorialCitas";


const CitasTable = () => {
  const dispatch = useDispatch()
  const stateCitas = useSelector(state => state?.allCitas);
  useEffect(()=>{
    dispatch(allCitas())
},[])
  const [selectedVenta, setSelectedVenta] = useState(null);
  const [Citas, setCitas] = useState(true);
  const [Historial, setHistorial] = useState(false);
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

  const verHistorial = () => {
    setCitas(false)
    setHistorial(true)
  }
  const verCitas = () => {
    setCitas(true)
    setHistorial(false)
  }


 console.log(currentSales)
  return (
    <>
  {Citas ? <span onClick={()=> verHistorial()} className="px-4 text-gray-500 text-sm py-2 cursor-pointer">Ver historial</span> : <span onClick={()=> verCitas()} className="px-4 text-gray-500 text-sm py-2 cursor-pointer">Ver citas</span> }

  {Citas ? <CitasPendientes/> : ''}
    {Historial ? <HistorialCitas/> : ''}


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
  );
};

export default CitasTable;