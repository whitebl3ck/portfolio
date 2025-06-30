import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // These values need to be replaced with your actual EmailJS credentials
    const serviceID = 'service_y1bc5fn';
    const templateID = 'template_gd6x98d';
    const userID = 'QJ9KrBfTVwmghYWwf';

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-6xl font-bold mb-12 text-center">Get in Touch</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <p className="text-stone-300 leading-relaxed">
            I'm currently available for freelance work and open to discussing new projects. Feel free to reach out to me through any of the following channels.
          </p>
          <div className="space-y-4">
            <a href="mailto:vopara32@gmail.com" className="flex items-center gap-4 text-lg hover:text-stone-300 transition-colors">
              <FaEnvelope className="text-2xl" />
              <span>vopara32@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 text-lg">
              <FaPhone className="text-2xl" />
              <span>+234 704 459 4220</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <FaMapMarkerAlt className="text-2xl" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.form 
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="from_name" 
              required
              className="w-full p-3 bg-stone-800 border border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="from_email" 
              required
              className="w-full p-3 bg-stone-800 border border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required
              className="w-full p-3 bg-stone-800 border border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full py-3 px-6 bg-stone-600 hover:bg-stone-500 text-white font-bold rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>
          {status && <p className="text-center mt-4">{status}</p>}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact; 