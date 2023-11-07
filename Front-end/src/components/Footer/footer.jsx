import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
  const redirigirAlInicio = () => {
    window.scrollTo(0, 0);
  }
  return (
    <><div className='bg-gray-100 border-t px-20 border-gray-300 py-8'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <p className='text-xl font-bold '>Dentalcare</p>
          </div>
          <p className='text-sm text-gray-700'>© 2023 DentalCare. Todos los derechos reservados.</p>
        </div>
        <div className='grid grid-cols-3 gap-60 mt-8'>
          <div className=''>
            <h2 className='text-lg font-bold mb-4'>Servicios</h2>
            <ul className='space-y-2'>
              <li onClick={redirigirAlInicio()}>
                <Link to='/' className='text-gray-600 hover:text-gray-900'>Home</Link>
              </li>
              <li onClick={redirigirAlInicio()}>
                <Link to='/catalogo' className='text-gray-600 hover:text-gray-900'>Catalogo</Link>
              </li>

            </ul>
          </div>
          <div className=''>
            <h2 className='text-lg font-bold mb-4'>Compañía</h2>
            <ul className='space-y-2'>
              <li onClick={redirigirAlInicio()}>
                <Link to='/aboutUs' className='text-gray-600 hover:text-gray-900'>Sobre nosotros</Link>
              </li>
              <li onClick={redirigirAlInicio()}>
                <Link to='/faqs' className='text-gray-600 hover:text-gray-900'>Preguntas frecuentes</Link>
              </li>
            </ul>
          </div>
          <div className=''>
            <h2 className='text-lg font-bold mb-4'>Contacto</h2>
            <ul className='space-y-2'>
              <li>
                <a href='mailto:info@enmable.com' className='text-gray-600 hover:text-gray-900'>info@enmable.com</a>
              </li>
              <li onClick={redirigirAlInicio()}>
                <Link to={'/contact'}>Contactanos</Link>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-gray-900'>+1 (123) 456-7890</a>
              </li>
            </ul>
            <div className='flex mt-4 space-x-4'>
         
            </div>
          </div>
        </div>
      </div>
      </div><div className="bg-gradient-to-r from-green-500 via-blue-100 to-blue-500 h-2 animate-pulse"></div></>

  );
};

export default Footer;