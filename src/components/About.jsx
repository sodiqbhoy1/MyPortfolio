import React from 'react';
import Me from '../assets/me.jpg'; // Make sure to replace this with the correct path to your image

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-indigo-600 to-blue-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center p-4">
            <div
              className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-cover bg-center shadow-2xl border-4 border-yellow-400 transform hover:scale-110 transition-all"
              style={{ backgroundImage: `url(${Me})` }}
            ></div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 text-center md:text-left px-4">
            <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
              Hi! I'm <strong className="text-yellow-400">Adamu Baba Sodiq</strong>, a passionate and detail-oriented Full-Stack Web Developer. I specialize in both front-end and back-end development, creating dynamic, responsive, and scalable web applications using modern technologies and best practices.
            </p>

            <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
              I have hands-on experience with a variety of front-end frameworks like <strong className="text-yellow-400">React</strong>, <strong className="text-yellow-400">Vue.js</strong>, and <strong className="text-yellow-400">Angular</strong>, which allow me to build responsive user interfaces that engage users and improve user experience. On the back-end, I work with <strong className="text-yellow-400">Node.js</strong>, <strong className="text-yellow-400">PHP</strong>, and <strong className="text-yellow-400">Laravel</strong> to develop robust, scalable APIs and server-side logic.
            </p>

            <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
              I’m well-versed in using databases like <strong className="text-yellow-400">MySQL</strong> and <strong className="text-yellow-400">MongoDB</strong>, and I’ve integrated real-time features with <strong className="text-yellow-400">Firebase</strong> to enhance application performance. I’m also proficient with version control using <strong className="text-yellow-400">Git</strong>, ensuring efficient collaboration and code management across teams.
            </p>

            <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
              I am always keen to learn new technologies and improve my skills to stay ahead of industry trends. I thrive in collaborative environments and enjoy solving complex challenges. Whether it's building an intuitive user interface or architecting a high-performance backend, I’m always focused on delivering solutions that meet user needs and exceed expectations.
            </p>

            <a
              href="#contact"
              className="inline-block bg-yellow-500 text-blue-900 py-3 px-8 rounded-lg hover:bg-yellow-400 hover:text-white text-lg font-semibold transition-all transform hover:scale-105 shadow-md"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
