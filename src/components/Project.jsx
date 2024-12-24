import React from 'react';
import Movie from '../assets/movie.jpg';
import News from '../assets/news.jpg';
import Drinks from '../assets/drinks.jpg';
import delivery from '../assets/delivery.jpg';
import Learning from '../assets/learning.jpg';
import school from '../assets/school.jpg';

const Project = () => {
  const projects = [
    { 
      title: 'Movie Portal', 
      link: 'https://movieportal-red.vercel.app/', 
      image: Movie, 
      description: 'This is a Movie Portal that allows users to browse and search for their favorite movies. It integrates with an external API to fetch movie details dynamically. Built using Angular, this project features a clean and responsive design, a search function, and pagination for easy browsing.' 
    },
    { 
      title: 'Next Portal', 
      link: 'https://news-portal-coral.vercel.app/', 
      image: News, 
      description: 'This is a News Portal built using React, where users can view the latest news articles from various categories. The site fetches data from a news API, allowing for real-time updates. It also features a clean, responsive layout and a user-friendly interface for seamless browsing of headlines.' 
    },
    { 
      title: 'Haven Drinks', 
      link: 'https://havendrinks.vercel.app/', 
      image: Drinks, 
      description: 'Haven Drinks is a single-page application (SPA) built with Vue.js to promote and advertise drinks. It focuses on showcasing products in an attractive, interactive layout, featuring a clean, minimalistic design with smooth transitions and animations. The project highlights my skills in Vue.js and client-side routing.' 
    },
    { 
      title: 'Delivery', 
      link: 'https://delivery-umber.vercel.app/', 
      image: delivery, 
      description: 'A simple React SPA for a delivery service website with a clean, modern UI.' 
    },
    { 
      title: 'Learning', 
      link: 'https://myschool-iota.vercel.app/', 
      image: Learning, 
      description: 'MySchool Portal is a web application designed to manage school-related tasks like viewing assignments and student data. Built with Angular and styled using Tailwind CSS, this project emphasizes a clean, intuitive UI and local storage for maintaining user data across sessions. No backend is required, making the app lightweight and fast.' 
    },
    { 
      title: 'Learning System Portal', 
      link: 'https://learningsystem-theta.vercel.app/', 
      image: school, 
      description: 'A school portal built with Angular and Tailwind CSS. It offers a clean, responsive interface for managing school data, assignments, and student progress, utilizing local storage for session persistence.' 
    }
  ];

  return (
    <section id='projects' className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">My Projects</h2>
        <div className="relative border-l-4 border-blue-600">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center mb-8 sm:mb-10 ml-0 sm:ml-8 space-y-4 sm:space-x-6 sm:space-y-0">
              {/* Thumbnail */}
              <img
                src={project.image}
                alt={project.title}
                className="w-32 h-20 object-cover rounded-md shadow-lg"
              />
              <div className="text-center sm:text-left">
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-blue-900">{project.title}</h3>
                {/* Project Description */}
                <p className="text-gray-700 mt-2">{project.description}</p>
                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition-all"
                >
                  View Project
                </a>
                <hr className="my-4 border-t-4 border-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
