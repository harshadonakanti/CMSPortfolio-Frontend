import { motion } from "framer-motion";
import React from "react";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20"
    >
      <div className="mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#852e4e]">
          My Skills
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-16 text-lg text-white">
          I develop websites that look good, work fast, and handle data
          properly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer border border-[#852e4e]/30"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <skill.icon className="text-4xl text-neutral-300" />
                  <h3 className="font-semibold text-xl text-[#e8d8c4]">{skill.title}</h3>
                  <p className="text-sm opacity-80 text-[#e8d8c4]">{skill.description}</p>

                  {/* FIXED TAGS */}
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {skill.tags.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#852e4e]/10 text-[#852e4e] px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
