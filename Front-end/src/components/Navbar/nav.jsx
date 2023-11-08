import React from 'react'
import { FaNeuter, FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';


const Navbar = () => {
    const animatedStyle1 = useSpring({
        from: { opacity: 0, marginLeft: -200 },
        to: { opacity: 1, marginLeft: 0 },
        delay: 500,
      });
      
      function handleGoToChooseSection() {
        const chooseSection = document.getElementById('choose-section');
        chooseSection.scrollIntoView({ behavior: 'smooth' });
      }

    return (
    <>
    <animated.div style={animatedStyle1}>
<div className='shadow shadow-lg flex justify-between py-4'>
            {/* Left */}
            <div className='mx-5 flex items-center'>
                <FaNeuter/>
                <h2 className='mx-1'>DentalCare</h2>
            </div>
            {/* Right */}
            <div className=''>
                <ul className='flex items-center mx-5'>
                <Link to={'/'}> <li className='px-3 transition duration-500  hover:text-green-400 transition-3s ease-in-out'>Home</li></Link>
                <li onClick={handleGoToChooseSection} className='px-3 transition duration-500  hover:text-green-400 transition-3s cursor-pointer ease-in-out'>Why choose us!</li>
                <Link to={'/'}> <li className='px-3 transition duration-500  hover:text-green-400 transition-3s ease-in-out'>About</li></Link>
                <Link to={'/'}> <li className='px-3 transition duration-500  hover:text-green-400 transition-3s ease-in-out'>Contact</li></Link>
                <Link to={'/'}><li className='px-3 transition duration-500  hover:text-green-400 transition-3s ease-in-out'>Services</li></Link>
                <Link to={'/'}><li className='px-3 bg-green-700 rounded-full py-1 text-white transition duration-300  hover:bg-green-800 transition-3s ease-in-out'>Book Online</li></Link>
                
                </ul>
            </div>
        </div>
    </animated.div>
    
        </>
  )
}

export default Navbar