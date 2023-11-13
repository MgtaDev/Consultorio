import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';



function Footer() {
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
  
  return (
    <>
    <animated.div style={animatedStyle2}>
    <div class="bg-gray-100 py-12">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="grid grid-cols-2 gap-8 ml-10 xl:col-span-2">
        <div class="md:grid md:grid-cols-2  md:gap-8">
          <div>
            <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase mb-4">Dirección</h4>
            <p class="mt-0 mb-4 text-gray-500">Calle 53 # 34-206</p>
          </div>
          <div>
            <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase mb-4">Horario</h4>
            <p class="mt-0 mb-4 text-gray-500">Lunes a viernes - 8:00 a.m. a 5:00 p.m.</p>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase mb-4">Teléfono</h4>
            <p class="mt-0 mb-4 text-gray-500">0412 196-8978</p>
          </div>
          <div>
            <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase mb-4">Correo electrónico</h4>
            <p class="mt-0 mb-4 text-gray-500">contacto@dentalcare.com</p>
          </div>
        </div>
      </div>
      <div class="mt-8 xl:mt-0 ml-40">
        <h4 class="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase mb-4">Redes sociales</h4>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-500 hover:text-gray-600">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10zm-1.625 0h-2.036c0 2.216 1.594 4.053 3.693 4.198v-2.955c0-1.091.606-2.055 1.525-2.549-.752-.083-1.725-.566-2.135-1.294l-.014-.026c-.176-.316-.221-.706-.121-1.031.12-.422.505-.743.954-.824.465-.083.914.136 1.202.52.371.484.463 1.133.273 1.693-.188.531-.664 1.104-1.201 1.341v.703h1.879c-.481 1.12-1.463 2-2.719 2-1.605 0-2.75-1.143-2.75-2.625v-5.25c0-1.483 1.145-2.625 2.75-2.625h2.625v2.25h-3.375v.969h3.375v2.25c0 .69.314 1.312.938 1.688.283.184.585.31.938.344v1.875c-1.979-.05-3.938-.83-5.313-2.094-.862-.903-1.472-2.102-1.688-3.406h2.203v-2.063c0-.484.073-.953.275-1.375.207-.434.566-.645 1.023-.594.383.031.716.271.937.624.232.362.313.852.213 1.266-.084.377-.295.745-.621.979-.324.239-.757.374-1.163.374-.766 0-1.488-.344-1.975-.906-.486-.562-.759-1.284-.759-2.031v-2.25c0-1.483 1.144-2.625 2.75-2.625h4.125c1.605 0 2.75 1.142 2.75 2.625v5.25c0 1.482-1.145 2.625-2.75 2.625h-.125z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-600">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M22 5.631c-.81.36-1.68.602-2.592.71a4.52 4.52 0 0 0 1.984-2.496 9.027 9.027 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.707 4.114 12.81 12.81 0 0 1-9.3-4.705 4.49 4.49 0 0 0-.614 2.27 4.51 4.51 0 0 0 2.008 3.755 4.426 4.426 0 0 1-2.04-.564v.057a4.513 4.513 0 0 0 3.62 4.425c-.62.168-1.276.2-1.925.077a4.514 4.514 0 0 0 4.206 3.122 9.055 9.055 0 0 1-5.586 1.92c-.362 0-.723-.022-1.077-.065a12.73 12.73 0 0 0 6.895 2.023c8.327 0 12.871-6.902 12.871-12.873 0-.195-.005-.39-.014-.584a9.16 9.16 0 0 0 2.246-2.343z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-600">
            <span class="sr-only">Instagram</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M17.6667 3H6.33333C4.69167 3 3.33333 4.35833 3.33333 6V17.3333C3.33333 18.975 4.69167 20.3333 6.33333 20.3333H17.6667C19.3083 20.3333 20.6667 18.975 20.6667 17.3333V6C20.6667 4.35833 19.3083 3 17.6667 3ZM12 8.33333A3.66667 3.66667 0 1 0 12 15A3.66667 3.66667 0 0 0 12 8.33333ZM16.5 6.33333C16.9917 6.33333 17.4167 6.75833 17.4167 7.25C17.4167 7.74167 16.9917 8.16667 16.5 8.16667C16.0083 8.16667 15.5833 7.74167 15.5833 7.25C15.5833 6.75833 16.0083 6.33333 16.5 6.33333ZM12 14.1667A2.83333 2.83333 0 1 1 12 8.5A2.83333 2.83333 0 0 1 12 14.1667Z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
      <p class="text-base leading-6 text-gray-500 md:order-2">
        © 2021 Dentalcare - <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-600 transition ease-in-out duration-150">Política de privacidad</a>
      </p>
      <div class="mt-3 md:mt-0 md:order-1">
        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-600 transition ease-in-out duration-150">Términos y condiciones</a>
      </div>
    </div>
  </div>
</div>

    </animated.div>
   
      </>

  );
};

export default Footer;