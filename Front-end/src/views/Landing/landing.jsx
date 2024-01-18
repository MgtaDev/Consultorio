import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { allCitas } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Loaction from '../../components/Location/location';
import ReviewSlider from '../../components/ReviewsSlider/reviewsSlider';
import Contact from '../../components/Contact/contact';
import Hero from '../../assets/smiling.jpg'
import UserContext from '../../context/UserContext';


const Landing = () => {
  const dispatch = useDispatch();
  const { User } = useContext(UserContext) 
  console.log(User);

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
          className='hero-wrapper py-60 relative flex item justify-center flex-col pl-[2%]  '
        >
          
         <div className='z-20 relative -top-[100px]'>
         <div className='text-white text-4xl font-extrabold ml-7 mb-4 z-20'>
            ¡Bienvenido a Dental care!
          </div>
          <p className='text-white line-height text-2xl max-w-lg text-center z-20 '>
            Estamos aquí para ayudarte a tener una sonrisa saludable. Ofrecemos
            una amplia gama de servicios dentales y tratamientos para satisfacer
            todas tus necesidades.
          </p>
          <div className='flex z-20 ml-8'>
          <Link to={'/booking'}>
            <button className='bg-green-700 mx-4 rounded-lg font-bold text-white py-2 px-10 mt-8 transition duration-300 hover:bg-green-800'>
              ¡Haz tu cita ahora!
            </button>
          </Link>
          <Link to={User?.rol === 'admin' ? '/admin/dashboard' : '/admin-login' }>
            <button className='bg-green-700 mx-4 rounded-lg font-bold text-white py-2 px-10 mt-8 transition duration-300 hover:bg-green-800'>
              Soy admin
            </button>
          </Link>
          </div>
         </div>
          
       
        </div>
      </animated.div>
    
        <WhyChooseUs />
        <ReviewSlider/>
        <Loaction/>
        <Contact/>
      
      
    </>
  );
};

export default Landing;

