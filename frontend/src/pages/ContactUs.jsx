import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/user/create', formData);
      toast.success("Message sent succesfully");   
      navigate("/")
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
    toast.error("Error sending message");
    console.log(error)

    }
  };

  return (
    <div
      className="min-h-screen pt-20 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://www.hashmicro.com/blog/wp-content/uploads/2022/10/Tools-16.jpg')",
      }}
    >
      <div className="bg-gray-800 bg-opacity-90 p-10 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-yellow-300 mb-6">Contact Us</h2>
        <p className="text-center text-gray-300 mb-8">
          We'd love to hear from you! Please fill out the form below to get in touch.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white placeholder-gray-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white placeholder-gray-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-700 text-white placeholder-gray-400"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 p-4 rounded-lg font-medium hover:bg-yellow-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
