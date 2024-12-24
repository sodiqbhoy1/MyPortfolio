import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedElement = useRef(null);  // Reference for the element to apply Typed.js

  useEffect(() => {
    const options = {
      strings: [
        'Full Stack Web Developer',
    'UI/UX Designer & Developer',
    'Frontend & Backend Developer',
    'Web Developer & Designer',
    'Building Scalable Websites', 
      ],
      typeSpeed: 60,  // Slightly slower typing speed for a more relaxed experience
      backSpeed: 40,  // Slower backspacing for smoother transitions
      backDelay: 1500, // Delay before backspace starts
      loop: true,
      showCursor: true,  // Keeps the cursor visible
    };

    // Initialize Typed.js
    const typed = new Typed(typedElement.current, options);

    // Cleanup function to destroy Typed.js when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="my-20">
      <header id="home" className="bg-gray-800 text-white py-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Hi, I'm Adamu Baba Sodiq
          </h1>

          {/* Description with Typed.js typing effect */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm a passionate{' '}
            <span
              ref={typedElement}
              className="font-semibold text-yellow-400 block text-2xl sm:text-3xl md:text-4xl"
            ></span>
            <span className="block mt-4 text-lg sm:text-xl text-gray-400">
              Take a look at my work, and let's collaborate!
            </span>
          </p>

          {/* Call-to-Action Button */}
          <a
            href="#contact"
            className="inline-block bg-yellow-500 text-white hover:bg-yellow-400 text-lg font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </header>
    </div>
  );
};

export default Hero;
