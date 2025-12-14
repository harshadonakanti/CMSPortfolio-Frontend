import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

      .then(() => {
        alert("Message sent successfully ");
        formRef.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message ");
        console.error(error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="contact"
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#852e4e]">
          Contact Me
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-16 text-gray-300">
          Have a question or want to work together? Send me a message!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto text-white">

          {/* FORM */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-2">Your Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#852e4e] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2">Your Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#852e4e] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#852e4e] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#852e4e] hover:bg-[#6f233d] transition font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* INFO */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaMapMarkedAlt className="text-2xl text-[#852e4e]" />
              <p>Hyderabad, Telangana</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-[#852e4e]" />
              <p>harshadonakanti@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-[#852e4e]" />
              <p>+91 8985871489</p>
            </div>

            <div>
              <h3 className="text-xl mb-2 font-semibold">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/harshadonakanti" target="_blank" rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:scale-110 transition">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/harshadonakanti" target="_blank" rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:scale-110 transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
