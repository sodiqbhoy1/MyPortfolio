import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace these placeholders with your EmailJS credentials
    const serviceID = 'service_nnjugzs';
    const templateID = 'template_pjd6b2t';
    const userID = 'eX6N_fPLSnqk24w9a';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setErrorMessage('Failed to send your message. Please try again.');
      });
  };

  return (
    <section id="contact" className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Get In Touch
        </h2>
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 focus:outline-none transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Or feel free to reach out via email:
          </p>
          <a
            href="mailto:adamubabasodiq@gmail.com"
            className="text-blue-600 hover:text-blue-500"
          >
            adamubabasodiq@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
