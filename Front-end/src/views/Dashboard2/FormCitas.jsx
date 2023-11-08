import axios from "axios";
import { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormCitas = () => {
  const animatedStyle1 = useSpring({
    from: { opacity: 0, marginTop: -200 },
    to: { opacity: 1, marginTop: 0 },
    delay: 500,
  });


  function redirigirAlInicio() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const animatedStyle2 = useSpring({
    from: { opacity: 0, marginTop: 50 },
    to: { opacity: 1, marginTop: 0 },
    delay: 1000,
  });
  
  const [formValues, setFormValues] = useState({
    fecha: null,
    descripcion: "",
    estado: "",
    clienteId: "",
    medicoId: "",
    hora: "",
  });
  console.log(formValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    // Aquí iría tu lógica para enviar los datos al servidor
  };

  const showAlert = () => {
    toast.success('Cita creada correctamente', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    handleSubmit();
    redirigirAlInicio()
  };

  return (
    <>
      <animated.div style={animatedStyle1}>
        <h2 className=" text-[50px] text-gray-500 m-5 ">Crear Cita</h2>
      </animated.div>

      <animated.div style={animatedStyle2}>
        <form className="p-6">
          {/* Fecha */}
          <div className="mb-4">
            <label htmlFor="fecha" className="block text-gray-700 font-bold mb-2">
              Fecha
            </label>
            <input
              type="date"
              name="fecha"
              id="fecha"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formValues.fecha}
              onChange={handleInputChange}
            />
          </div>

          {/* Descripcion */}
          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-gray-700 font-bold mb-2">
              Descripción
            </label>
            <textarea
              name="descripcion"
              id="descripcion"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              cols="30"
              rows="5"
              value={formValues.descripcion}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Cliente */}
          <div className="mb-4">
            <label htmlFor="clienteId" className="block text-gray-700 font-bold mb-2">
              Nombre del Cliente
            </label>
            <input
              type="text"
              placeholder="Ingrese el nombre del cliente"
              name="estado"
              id="estado"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formValues.clienteId}
              onChange={handleInputChange}
            />
          </div>

          {/* Medico */}
          <div className="mb-4">
            <label htmlFor="medicoId" className="block text-gray-700 font-bold mb-2">
              Nombre del Médico
            </label>
            <select
              name="estado"
              id="estado"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formValues.medicoId}
              onChange={handleInputChange}
            >
              <option value="">Seleccione el medico asignado para la cita</option>
              <option value="pendiente">Pendiente</option>
              <option value="cancelada">Cancelada</option>
              <option value="realizada">Realizada</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="hora" className="block text-gray-700 font-bold mb-2">
              Hora
            </label>
            <select
              name="estado"
              id="estado"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formValues.hora}
              onChange={handleInputChange}
            >
              <option value="">Seleccione la hora de la cita</option>
              <option value="pendiente">1:00 am</option>
              <option value="pendiente">1:00 am</option>
              <option value="pendiente">1:00 am</option>
              <option value="pendiente">1:00 am</option>
              <option value="pendiente">1:00 am</option>
              <option value="pendiente">1:00 am</option>
              <option value="pendiente">1:00 am</option>
              <option value="pendiente">1:00 am</option>
              <option value="pendiente">1:00 am</option>
              <option value="pendiente">1:00 am</option>
            </select>
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              onClick={showAlert}
              type="button"
              className="bg-green-400 transition duration-500  hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Crear cita
            </button>
            <ToastContainer
            
            />
          </div>
        </form>
      </animated.div>
    </>
  );
};

export default FormCitas;