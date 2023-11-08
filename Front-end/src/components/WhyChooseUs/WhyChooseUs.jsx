import React from 'react';
import { useSpring, animated } from 'react-spring';

const WhyChooseUs = () => {

  const animatedStyle1 = useSpring({
    from: { opacity: 0, marginLeft: -200 },
    to: { opacity: 1, marginLeft: 0 },
    delay: 500,
  });
  const animatedStyle2 = useSpring({
    from: { opacity: 0, marginTop: 50 },
    to: { opacity: 1, marginTop: 0 },
    delay: 1000,
  });

  return (
    <animated.div style={animatedStyle1}>
        <div id='choose-section' className='border border-200 mx-20'></div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-wide uppercase text-gray-800">Por que escojernos?</h2>
            <p className="mt-4 text-xl text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus quis eros varius tristique. Cras et eleifend sapien.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErX4jkOXSRBrY9sK6hqRrMniIkXg1O1ypAg&usqp=CAU" alt="Check mark" className="w-12 h-12" />

                </div>
                <h3 className="text-xl font-semibold mb-2">Profesionalismo y experiencia</h3>
                <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus quis eros varius tristique. Cras et eleifend sapien.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErX4jkOXSRBrY9sK6hqRrMniIkXg1O1ypAg&usqp=CAU" alt="Check mark" className="w-12 h-12" />

                </div>
                <h3 className="text-xl font-semibold mb-2">Cuidado personal</h3>
                <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus quis eros varius tristique. Cras et eleifend sapien.</p>
              </div>
           </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErX4jkOXSRBrY9sK6hqRrMniIkXg1O1ypAg&usqp=CAU" alt="Check mark" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technologia de punta</h3>
                <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus quis eros varius tristique. Cras et eleifend sapien.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </animated.div>
  );
};

export default WhyChooseUs;