import React from 'react';

const Hero = () => {
  return (
    <div className="my-20">
      <header id="home" className="bg-gray-100 text-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm Adamu Baba Sodiq
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm a passionate Full Stack Web Developer, crafting scalable and user-friendly applications.
            I specialize in both front-end and back-end development. Take a look at my work, and let's collaborate!
          </p>

          {/* Call-to-Action Button */}
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white hover:bg-blue-500 text-lg font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </header>
    </div>
  );
};

export default Hero;
