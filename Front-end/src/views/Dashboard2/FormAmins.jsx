import axios from "axios";
import { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminCreateForm = () => {
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
   name: '',
   correo_electronico: '',
   contraseña: ''
});
  console.log(formValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const admin = {
    name: formValues.name,
    correo_electronico: formValues.correo_electronico,
    contraseña: formValues.contraseña,
    admin: true
}
  console.log(admin);

  const handleSubmit = () => {
    const {name, correo_electronico, contraseña} = formValues
    const admin = {
        name: name,
        correo_electronico: correo_electronico,
        contraseña: contraseña,
        admin: true
    }
    try {
        axios.post('http://localhost:3001/admin', admin )
    } catch (error) {
        console.log('Error creando el administrador:', error.message);
    }
  };

  const showAlert = () => {
    toast.success('Administrador creado correctamente', {
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
        <h2 className=" text-[50px] text-gray-500 m-5 ">Crear Administrador</h2>
      </animated.div>

      <animated.div style={animatedStyle2}>
        <form className="p-6">
         

          {/* Cliente */}
         <div className="mb-4">
            <label htmlFor="medicoId" className="block text-gray-700 font-bold mb-2">
             Nombre del Administrador
            </label>
            <input
              name="name"
              id="name"
              placeholder="Ingrese su contraseña de admninistrador"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
              value={formValues.name}
            >
            </input>
          </div>

          {/* Correo */}
          <div className="mb-4">
            <label htmlFor="medicoId" className="block text-gray-700 font-bold mb-2">
              Correo Electronico
            </label>
            <input
              name="estado"
              placeholder="Ingrese el correo electronico"
              id="estado"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            >
          
            </input>
          </div>

        {/* Confirmar correo*/}
        <div className="mb-4">
                <label htmlFor="medicoId" className="block text-gray-700 font-bold mb-2">
                   Confirmar Correo electronico
                </label>
                <input
                name="correo_electronico"
                id="correo_electronico"
              placeholder="Ingrese su contraseña de admninistrador"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
              value={formValues.correo_electronico}
            >
            </input>
            </div>

            {/* Contraseña */}
            <div className="mb-4">
            <label htmlFor="medicoId" className="block text-gray-700 font-bold mb-2">
                Contraseña
            </label>
            <input
              placeholder="Ingrese su contraseña de admninistrador"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            >
            </input>
          </div>

            {/*Confirmar Contraseña */}
            <div className="mb-4">
            <label htmlFor="medicoId" className="block text-gray-700 font-bold mb-2">
                Confirmar Contraseña
            </label>
            <input
              name="contraseña"
              id="contraseña"
              placeholder="Confirme su contraseña"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formValues.contraseña}
              onChange={handleInputChange}
            >
            </input>
          </div>


         
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={showAlert}
              type="button"
              className="bg-green-400 transition duration-500  hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Crear Administrador
            </button>
            <ToastContainer
            
            />
          </div>
        </form>
      </animated.div>
    </>
  );
};

export default AdminCreateForm;