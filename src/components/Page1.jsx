import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Page1 = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/userinfo");

        if (res.data.success) {
          setInfo(res.data.data);
        }
      } catch (err) {
        console.log("Error fetching user info:", err);
      }
    };

    fetchInfo();
  }, []);

  if (!info) {
    return (
      <div className="text-center text-white py-20 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ once: true }}
        className="min-h-screen flex items-center pt-20 pb-16"
        id="home"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between tracking-tighter">
          
          {/* LEFT SECTION */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 text-[#e8d8c4]">
              Hello, I'm {info.name}
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-[#e8d8c4]">
              Aspiring <span className="text-white">{info.role}</span>
            </h2>

            <p className="text-[#e8d8c4] max-w-md mx-auto md:mx-0">
              {info.description}
            </p>

            <div className="flex space-x-4 mt-8 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-4 py-3 border rounded-2xl font-medium hover:bg-white hover:text-black transition duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-4 py-3 border rounded-2xl font-medium hover:bg-white hover:text-black transition duration-300"
              >
                Contact me
              </a>
            </div>
          </div>

          {/* RIGHT SECTION (IMAGE) */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-48 h-48 md:w-80 md:h-80">
              <img
                src={`http://localhost:3000/uploads/${info.image}`}
                className="imgS rounded-full h-full w-full hover:scale-110 transition duration-300 object-cover z-10"
                alt={info.name}
              />
            </div>
          </div>

        </div>
      </motion.div>
    </>
  );
};

export default Page1;
