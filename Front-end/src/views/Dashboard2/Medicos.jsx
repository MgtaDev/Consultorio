import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { BsCheckCircle } from 'react-icons/bs';
import { BsXCircle } from 'react-icons/bs';
import axios from "axios";

import Swal from 'sweetalert2'
import { allMedicos } from "../../redux/actions";
import { useSpring, animated } from 'react-spring';



const ProductosTable = () => {
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
  useEffect(()=>{
    dispatch(allMedicos())
},[])
const Medicos = useSelector(state => state.allMedicos);
const [disableTF, setDisableTF] = useState(true);
  const [pageNumberNx, setPageNumberNx] = useState(0);
  const numberSize = 20;
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);


  const handlerPageNumber = (index) => {
    setPageNumberNx(index);
  };
  const redirigirAlInicio = () => {
    window.scrollTo(0, 0);
  }

 



  const handlePageClick = (newPageNumber) => {
    // Limitar la navegación entre las páginas 1 y 3
    if (newPageNumber < 0) {
      newPageNumber = 0;
    } else if (newPageNumber > 2) {
      newPageNumber = 2;
    }
    setPageNumber(newPageNumber);
    const queries = {
      page: newPageNumber,
      size: numberSize
    };

    redirigirAlInicio()
  };
  const [pageNumber, setPageNumber] = useState(0);

  const renderPageButtons = () => {
    const pages = [];
    for (let i = 0; i < 3; i++) {
      pages.push(
        <button
          key={i}
          className={`border-solid rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950 ${
            i === pageNumber ? "bg-blue-900 text-white" : ""
          }`}
          disabled={i === pageNumber || Medicos.loading}
          onClick={() => handlePageClick(i)}
        >
          {i + 1}
        </button>
      );
    }
    return pages;
  };


  


  return (
    <>
    <animated.div style={animatedStyle1}>
    <div className="flex items-center gap-5">
      <h2 className=" text-[50px] text-gray-500 m-5 ">Medicos</h2>
        <select className="w-20 bg-gray-100  border border-200" name="" id=""></select>
        <select className="w-20 bg-gray-100  border border-200" name="" id=""></select>

        </div>
    </animated.div>
     

    <animated.div style={animatedStyle2}>
    <table className="w-full rounded-lg overflow-hidden">
        <thead className="bg-gray-100 shadow-lg uppercase text-sm leading-normal">
          <tr className="text-gray-600">
            <th className="border-0 px-6 py-4 font-bold">ID</th>
            <th className="border-0 px-6 py-4 font-bold">Nombre</th>
            <th className="border-0 px-6 py-4 font-bold">Especialidad</th>
            <th className="border-0 px-6 py-4 font-bold">Estado</th>
            <th className="border-0 px-6 py-4 font-bold">Editar</th>
            <th className="border-0 px-6 py-4 font-bold">Borrar</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {Medicos.sort((a, b) => a.id - b.id).map((medico) => (
            <tr key={medico.id} className="border-t">
              <td className="px-6 text-center capitalize py-10">{medico.id}</td>
              <td className="px-6 text-center capitalize py-10">{medico.name}</td>
              <td className="px-6 text-center py-10">{medico.especialidad}</td>
              <td className="px-6 l text-center items-center py-10">
              {medico.activa === true ? (
                <div className="d-flex items-center">
                  <span className="px-4">Atendiendo</span>

                  <BsCheckCircle className="relative bottom-4" />
                </div>
              ) : (
                <>
                  <span className="px-4">Ausente</span>
                  <BsXCircle className=" relative bottom-4" />
              </>
              )}</td>
              <td className="px-6 text-center py-4">
                <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700">

                  Editar
                </button>
              </td>
              <td className="px-6 text-center py-4">

              {medico.activa === true
              ? <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded hover:bg-orange-800">
              Colocar Ausente
              </button>
              : <button className="bg-green-400 text-white font-bold py-2 px-4 rounded hover:bg-orange-800">
              Colocar Atendiendo
              </button>
              }

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex py-30 justify-center items-center space-x-2 mt-4 mb-10">
    
      {Medicos.length > 5 && (
        <div className="flex justify-center py-10">
        <button
          disabled={disablePrev || Medicos.loading}
          onClick={() => handlePageClick(pageNumber - 1)}
          className="border-solid rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950 "
        >
          {"<"}
        </button>
        {renderPageButtons()}
        <button
          disabled={disableNext || Medicos.loading}
          onClick={() => handlePageClick(pageNumber + 1)}
          className="border-solid rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950"
        >
          {">"}
        </button>

     
      </div>
      )}
    
    </div>
    </animated.div>
    
        </>
      );
};

export default ProductosTable;

