import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { allClientes } from "../../redux/actions";
import { BsCheckCircle } from 'react-icons/bs';
import { BsXCircle } from 'react-icons/bs';
import axios from "axios";
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom'
import Detail from "../Detail/detail";


import Swal from 'sweetalert2'
import { FaSearch } from "react-icons/fa";

const ClientesTable = () => {
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(allClientes())
    },[])

    const [Detalle, setDetalle] = useState(false)
    const [Historial, setHistorial] = useState(true)
    

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
  const stateClients = useSelector(state => state.allClientes);
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPage, setSelectedPage] = useState(1)
  const [itemsPerPage] = useState(8)
  const lastClient = currentPage * itemsPerPage;
  const firtsClient = lastClient - itemsPerPage
  const currentClient = stateClients?.slice(firtsClient,lastClient)
  console.log(stateClients);
  const [disableTF, setDisableTF] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const numberSize = 10;

  const redirigirAlInicio = () => {
    window.scrollTo(0, 0);
  }



  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(stateClients?.length / itemsPerPage); i++) {
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
  console.log(stateClients)

  const [name, setName] = useState('')
  const [correo, setCorreo] = useState('')
  const [cedula, setCedula] = useState('')
  const [id, setId] = useState('')
 
const verDetalle = (id, correo, cedula, name) => {
  setDetalle(true)
  setHistorial(false)
  setCedula(cedula)
  setCorreo(correo)
  setId(id)
  setName(name)
}
console.log(Historial);
  

  return (
    <>

    {Detalle ? <Detail setDetalle={setDetalle} id={id} name={name} correo={correo} cedula={cedula}  setHistorial={setHistorial}/> : ''}
    {Historial ?     <>
    
    {
      stateClients?.length === 0 ? (
        <div className="flex justify-center items-center h-full">
        <div className="text-3xl text-gray-500 font-bold">No hay clientes aun...</div>
      </div>
      ) : (
        <>
        <animated.div style={animatedStyle1}>
        <div className="flex items-center gap-5">
        <h2 className=" text-[50px] text-gray-500 m-5 ">Historial de clientes</h2>
        <div 
        className=" flex bg-gray-100 rounded-lg w-[500px] px-5 py-1 border border-200 justify-end">
        <FaSearch className="text-gray-500 cursor-pointer "/> 
        </div>
        <select className="w-20 bg-gray-100 rounded-lg border border-200" name="" id=""></select>
        <select className="w-20 bg-gray-100 rounded-lg border border-200" name="" id=""></select>

        </div>
        </animated.div>
      
        <animated.div style={animatedStyle2}>
        <table className="w-full rounded-lg overflow-hidden">
            <thead className="bg-gray-100 shadow-lg uppercase text-sm leading-normal">
              <tr className="text-gray-600">
                <th className="border-0 px-6 py-4 font-bold">Id</th>
                <th className="border-0 px-6 py-4 font-bold">Nombre</th>
                <th className="border-0 px-6 py-4 font-bold">Correo Electronico</th>
                <th className="border-0 px-6 py-4 font-bold">Direccion</th>
                <th className="border-0 px-6 py-4 font-bold">Estado</th>
                <th className="border-0 px-6 py-4 font-bold">Banear</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {currentClient?.map((client) => (
                <tr  key={client.id} className="border-t">
                  <td className="px-6 text-center capitalize py-10">{client?.id}</td>
                  <td onClick={()=> verDetalle(client.id, client.name, client.cedula_identidad, client.correo_electronico)} className="px-6 cursor-pointer text-center py-10">{client?.name}</td>
                  <td className="px-6 text-center py-10">{client?.correo_electronico}</td>
                  <td className="px-6 text-center py-10">{client?.direccion}</td>
                  <td className="px-6 l text-center py-10">
                  {client?.activa === true ? (
                    <div className="d-flex align-items-center">
                      <span>Activo</span>
                      <BsCheckCircle className="relative bottom-4" />
                    </div>
                  ) : (
                    <>
                      <span className="ml-3">Baneado</span>
                      <BsXCircle className="mr-5 relative bottom-4" />
                  </>
                  )}</td>
                 
                
                  {
                    client?.correo_electronico !== 'passantinodev@gmail.com' 
                    ? <td className="px-6 text-center py-4">
                    {client?.activa === true
                    ? <button  className="bg-gray-400 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded">Banear</button>
                    : <button  className="bg-green-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded">Quitar baneo</button>
                    }
                    </td>
                    :''
                  }
                  
                </tr>
              ))}
            </tbody>
          </table>
    
          {/* Pagination Buttons */}
          {
            stateClients?.length > 10 && (
          <div className="flex justify-center py-8">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  setSelectedPage(selectedPage - 1);
                  redirigirAlInicio()
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
                  redirigirAlInicio()
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
                if (currentPage < Math.ceil(stateClients?.length / itemsPerPage)) {
                  setCurrentPage(currentPage + 1);
                  setSelectedPage(selectedPage + 1);
                  redirigirAlInicio()
                }
              }}
              className="border-solid rounded-full w-10 h-10  rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950"
              >
              {">"}
            </button>
          </div>
            )
          }
        </animated.div>
         
          
       </>
      )
    }
    </> : ''}
    </>

      );
};

export default ClientesTable;