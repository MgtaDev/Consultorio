import React from 'react'
import Image from '../../assets/od.jpeg'

const Contact = () => {
  return (
    <>
      <div id='choose-section' className='border border-200 mx-20'></div>
    <div className="max-w-5xl mx-auto text-center mt-5 mb-12">
          <h2 className="text-3xl font-bold tracking-wide uppercase text-gray-800">Contactanos</h2>
      </div>
      <div class="flex justify-center">

              <div class="grid grid-cols-2 gap-4 max-w-4xl p-8">
                  <div>
                      <img className='h-full rounded-lg w-[400px]' src={Image} alt="Imagen de contacto" class="w-full h-auto" />
                  </div>
                  <div>
                      <form className='bg-white rounded-lg px-5 py-5 shadow shadow-lg'>
                          <div class="mb-4">
                              <label for="nombre" class="block mb-2 font-bold">Nombre</label>
                              <input type="text" id="nombre" name="nombre" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                          </div>
                          <div class="mb-4">
                              <label for="email" class="block mb-2 font-bold">Email</label>
                              <input type="text" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                          </div>
                          <div class="mb-4">
                              <label for="mensaje" class="block mb-2 font-bold">Mensaje</label>
                              <textarea id="mensaje" name="mensaje" class="w-full h-32 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
                          </div>
                          <button type="submit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Enviar</button>
                      </form>
                  </div>
              </div>
          </div></>
  )
}

export default Contact
