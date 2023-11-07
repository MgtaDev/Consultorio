
import { useEffect, useState } from "react";
import MedicosTable from "./Medicos";
import { FaUser, FaUserGraduate, FaList, FaPlus, FaNeuter } from 'react-icons/fa';
import ClientesTable from "./ClientesTable";
import CitasTable from "./Citas";
import { useDispatch, useSelector } from "react-redux";
import { allCitas, allClientes, allMedicos } from "../../redux/actions";
import FormCitas from "./FormCitas";

const Dashboard = () => {
  const dispatch = useDispatch()
  const [Citas, setCitas] = useState(true);
  const [Clientes, setClientes] = useState(false);
  const [Medicos, setMedicos] = useState(false);
  const [FormularioCitas, setFormularioCitas] = useState(false)
  useEffect(()=>{
    dispatch(allMedicos())
    dispatch(allClientes())
    dispatch(allCitas())
},[])


  const [navStyles, setNavStyles] = useState([
    "bg-green-500 text-gray-200 w-10 h-10 rounded-full m-auto",
    "text-gray-900 text-gray-200 w-10 h-10 rounded-full m-auto",
    "text-gray-900 text-gray-200 w-10 h-10 rounded-full m-auto",
    "text-gray-900 text-gray-200 w-10 h-10 rounded-full m-auto",
  ]);

  const handleNav = () => {
    setCitas(true);
    setClientes(false);
    setMedicos(false);
    setFormularioCitas(false)
 


    setNavStyles(["bg-green-500 w-10 h-10 rounded-full m-auto text-gray-200", "text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200", "text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200", "text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200"]);
  };
  const handleNav2 = () => {
    setCitas(false);
    setClientes(true);
    setMedicos(false);
    setFormularioCitas(false)



    setNavStyles([" text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200", "bg-green-500 w-10 h-10 rounded-full m-auto text-gray-200", "text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200", "text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200"]);
  };
  const handleNav3 = () => {
    setClientes(false);
    setCitas(false);
    setFormularioCitas(false)
    setMedicos(true);
  
  
    setNavStyles(["text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200", "text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200", "bg-green-500 w-10 h-10 rounded-full m-auto text-gray-200", "text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200"]); // <-- Corregir el tercer elemento
  };
  const handleNav4 = () => {
    setClientes(false);
    setCitas(false);
    setMedicos(false);
    setFormularioCitas(true)

  
    setNavStyles(["text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200", "text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200", "text-gray-900 w-10 h-10 rounded-full m-auto text-gray-200", "bg-green-500 text-gray-900 w-10 h-10 rounded-full m-auto text-white"]); // <-- Corregir el tercer elemento
  };
 



  return (
    <div className="flex pt-0.5  pb-60">
      <nav className=" w-20 px-5 flex flex-col justify-start items-stretch border-r border-gray-200">
        <div className="flex justify-center items-center py-4">
        <FaNeuter size={40} className="text-gray-500" />
        </div>
        <ul className="flex-grow -my-10">

          <li
            className={`text-lg font-bold my-20 flex justify-center p-3 cursor-pointer shadow-md bg-gray-100 transition duration-500 ${navStyles[0]} hover:bg-gray-300`}
            onClick={handleNav}>
           <FaList/>
          </li>
          <li
            className={`text-lg font-bold my-20 flex justify-center p-3 cursor-pointer shadow-md transition duration-500 ${navStyles[1]} hover:bg-gray-300`}
            onClick={handleNav2}>
          <FaUser/>
          </li>
          <li
            className={`text-lg font-bold my-20 flex justify-center p-3 cursor-pointer shadow-md transition duration-500 ${navStyles[2]} hover:bg-gray-300`}
            onClick={handleNav3}>
            <FaUserGraduate/>
          </li>
          <li
            className={`text-lg font-bold my-20 flex justify-center p-3 cursor-pointer shadow-md transition duration-500 ${navStyles[3]} hover:bg-gray-300`}
            onClick={handleNav4}>
            <FaPlus/>
          </li>
     
         
        </ul>
      </nav>
      <div className="flex-grow bg-gray-50">
        {Citas ? <CitasTable /> : ""}
        {Clientes ? <ClientesTable /> : ""}
        {Medicos? <MedicosTable /> : ""}
        {FormularioCitas? <FormCitas/> : ""}
       
      </div>
    </div>
  );
};

export default Dashboard;