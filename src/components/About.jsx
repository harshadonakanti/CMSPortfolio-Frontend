import React, { useEffect, useState } from "react";
import { fetchAbout } from "../services/api";
import axios from "axios";
import { motion } from "framer-motion";
import myPic from "../assets/photo.jpg";
import { API_BASE_URL } from "../config/api";

const About = () => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/about`);
        if (res.data.success && res.data.data) {
          setDescription(res.data.data.description);
        }
      } catch (err) {
        console.log("Failed to load About section", err);
      }
    };

    fetchAbout();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      viewport={{ once: true }}
      id="about"
      className="py-20"
    >
      <div className="container mx-0 px-6">
        <div className="tracking-tighter">
          <h2 className="text-4xl text-center font-bold mb-4 text-[#ffa586]">
            About me
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-2xl text-[#b51a2b] font-semibold">
            Get to know more about me &hearts;
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 rounded-2xl">
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ opacity: 1, y: 50 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.9, ease: "easeIn" }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-1/2 h-1/2 object-cover rounded-3xl"
                src={myPic}
                alt="My Photo"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 1, y: 50 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.9, ease: "easeIn" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-4xl text-white font-semibold mb-2">About</h3>
              <p className="text-white mb-2 whitespace-pre-line">
                {description || "Loading..."}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
