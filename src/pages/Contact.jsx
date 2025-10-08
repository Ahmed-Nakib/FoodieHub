import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 flex flex-col items-center pt-24 px-4 md:px-8 relative">
      {/* 🔹 Title */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
      >
        Get in Touch ✉️
      </motion.h2>

      {/* 🔹 Contact Box */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-indigo-600 text-white p-10 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <p className="text-indigo-100 mb-8">
            Have a question, feedback, or partnership idea?  
            Reach out to us — we’d love to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl" />
              <p className="text-lg">+880 1789-123456</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl" />
              <p className="text-lg">support@foodiehub.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl" />
              <p className="text-lg">Mirpur, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm text-indigo-200">
              © {new Date().getFullYear()} FoodieHub — All Rights Reserved.
            </p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="p-10 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send Us a Message 💬
          </h3>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition resize-none"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium shadow-md transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* 🔹 Google Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mt-12 rounded-3xl overflow-hidden shadow-lg"
      >
        <iframe
          title="FoodieHub Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.737571138221!2d90.35743417515172!3d23.791536387222572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1e15fbdc4df%3A0x68c66e9d4451f0e!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1696677889234!5m2!1sen!2sbd"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="border-0 w-full h-[350px] md:h-[450px]"
        ></iframe>
      </motion.div>

      {/* 🔹 Floating Chat Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50">
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/8801789123456"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-2xl" />
        </motion.a>

        {/* Messenger */}
        <motion.a
          href="https://m.me/foodiehub"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaFacebookMessenger className="text-2xl" />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
