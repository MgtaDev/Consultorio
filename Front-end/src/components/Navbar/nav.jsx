import React from 'react'
import { FaNeuter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';


const Navbar = () => {
    const animatedStyle2 = useSpring({
        from: { opacity: 0, marginTop: 50 },
        to: { opacity: 1, marginTop: 0 },
        delay: 1000,
      });

    return (
    <>
    <animated.div style={animatedStyle2}>
    <div className="bg-gradient-to-r from-green-500 via-blue-100 to-blue-500 h-2 animate-pulse"></div><div className='shadow shadow-lg flex justify-between py-4'>
            {/* Left */}
            <div className='mx-5 flex items-center'>
                <FaNeuter/>
                <h2 className='mx-1'>DentalCare</h2>
            </div>
            {/* Right */}
            <div className=''>
                <ul className='flex mx-5'>
                <Link to={'/'}> <li className='px-3 hover:text-green-400 transition-3s ease-in-out'>Home</li></Link>
                <Link to={'/'}><li className='px-3 hover:text-green-400 transition-3s ease-in-out'>About</li></Link>
                <Link to={'/'}> <li className='px-3 hover:text-green-400 transition-3s ease-in-out'>Contact</li></Link>
                <Link to={'/'}><li className='px-3 hover:text-green-400 transition-3s ease-in-out'>Services</li></Link>
                   
                </ul>
            </div>
        </div>
    </animated.div>
    
        </>
  )
}

export default Navbar