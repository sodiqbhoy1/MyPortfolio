import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
          My Skills
        </h2>

        <p className="text-xl text-gray-600 mb-12">
          Here’s a selection of the technologies and tools I’m proficient in, and always eager to improve.
        </p>

        {/* Skills Grid with Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Skill 1 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-php-plain text-5xl text-[#787CB5] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">PHP</h3>
          </div>

          {/* Skill 2 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-laravel-plain text-5xl text-[#F05340] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Laravel</h3>
          </div>

          {/* Skill 3 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-angularjs-plain text-5xl text-[#E23237] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Angular</h3>
          </div>

          {/* Skill 4 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-vuejs-plain text-5xl text-[#4FC08D] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Vue.js</h3>
          </div>

          {/* Skill 5 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-mongodb-plain text-5xl text-[#47A248] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">MongoDB</h3>
          </div>

          {/* Skill 6 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-react-original text-5xl text-[#61DAFB] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">React</h3>
          </div>

          {/* Skill 7 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-html5-plain text-5xl text-[#E34F26] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">HTML5</h3>
          </div>

          {/* Skill 8 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-css3-plain text-5xl text-[#1572B6] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">CSS3</h3>
          </div>

          {/* Skill 9 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-javascript-plain text-5xl text-[#F7DF1E] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">JavaScript</h3>
          </div>

          {/* Skill 10 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-git-plain text-5xl text-[#F1502F] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Git</h3>
          </div>

          {/* Skill 11 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-nodejs-plain text-5xl text-[#339933] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Node.js</h3>
          </div>

          {/* Skill 12 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-firebase-plain text-5xl text-[#FFCA28] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Firebase</h3>
          </div>

          {/* Skill 13 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-mysql-plain text-5xl text-[#4479A1] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">MySQL</h3>
          </div>

          {/* Skill 14 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-tailwindcss-original colored text-5xl text-[#38BDF8] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Tailwind-css</h3>
          </div>

          {/* Skill 15 */}
          <div className="text-center transition-transform transform hover:scale-110 hover:shadow-lg">
            <i className="devicon-bootstrap-plain text-5xl text-[#563D7C] mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800">Bootstrap</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
