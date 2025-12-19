import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/api";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/projects`);;
      if (response.data.success) {
        setProjects(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#852e4e]">
          My Projects
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-16 text-lg text-white">
          Projects built to learn, explore new technologies, and deliver useful
          solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project._id}
              className="rounded-2xl overflow-hidden border border-[#852e4e]/30  hover:-translate-y-2 transition duration-300  bg-white/5 backdrop-blur-md"
            >
              {project.image && (
                <img
                  src={`${API_BASE_URL}/uploads/${project.image}`}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-[#f13f80]">
                  {project.title}
                </h3>

                <p className="text-sm text-[#e8d8c4] opacity-80">
                  {project.description}
                </p>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 border rounded-xl text-white hover:bg-[#852e4e] transition"
                  >
                    View Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
