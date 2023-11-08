import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allCitas } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCitas());
  }, []);

  const animatedStyle1 = useSpring({
    from: { opacity: 0, marginLeft: -200 },
    to: { opacity: 1, marginLeft: 0 },
    delay: 500,
  });

  return (
    <>
      <animated.div style={animatedStyle1}>
        <div
          className='py-60 relative flex flex-col justify-center items-center'
          style={{
            animation: 'pulse 4s infinite',
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        >
          <div className='text-white text-4xl font-extrabold mb-4'>
            ¡Bienvenido a Dental care!
          </div>
          <p className='text-white text-lg max-w-lg text-center'>
            Estamos aquí para ayudarte a tener una sonrisa saludable. Ofrecemos
            una amplia gama de servicios dentales y tratamientos para satisfacer
            todas tus necesidades.
          </p>
          <div className='flex'>
          <Link to={'/booking'}>
            <button className='bg-green-700 mx-4 rounded-lg font-bold text-white py-2 px-10 mt-8 transition duration-300 hover:bg-green-800'>
              ¡Haz tu cita ahora!
            </button>
          </Link>
          <Link to={'/admin/dashboard'}>
            <button className='bg-green-700 mx-4 rounded-lg font-bold text-white py-2 px-10 mt-8 transition duration-300 hover:bg-green-800'>
              Soy admin
            </button>
          </Link>
          </div>
       
        </div>
      </animated.div>
      <div className='my-20'>
        <WhyChooseUs />
      </div>
    </>
  );
};

export default Landing;

