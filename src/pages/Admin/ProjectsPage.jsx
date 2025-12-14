import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    demo: "",
    image: null,
  });
  const token = localStorage.getItem("token");
  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/projects");
      setProjects(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("description", form.description);
    fd.append("demo", form.demo);
    if (form.image) fd.append("image", form.image);

    try {
      await axios.post("http://localhost:3000/api/projects/create", fd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setForm({
        title: "",
        description: "",
        demo: "",
        image: null,
      });

      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };
  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 w-full">

      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Manage Projects
      </h1>
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl border">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Add New Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-semibold text-gray-700">Project Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Portfolio Website"
              className="w-full mt-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
              required
            />
          </div>
          <div>
            <label className="font-semibold text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Short project description..."
              className="w-full mt-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none resize-none"
              required
            />
          </div>
          <div>
            <label className="font-semibold text-gray-700">Demo Link</label>
            <input
              type="url"
              name="demo"
              value={form.demo}
              onChange={handleChange}
              placeholder="https://your-project-demo.com"
              className="w-full mt-1 border px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>
          <div>
            <label className="font-semibold text-gray-700">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-200"
          >
            Add Project
          </button>
        </form>
      </div>
      <h2 className="text-3xl font-semibold mt-10 mb-4 text-gray-800">
        Your Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border"
          >
            {p.image && (
              <img
                src={`http://localhost:3000/uploads/${p.image}`}
                className="h-48 w-full object-cover"
                alt="project"
              />
            )}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.description}</p>

              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-teal-600 font-semibold hover:underline"
                >
                  View Demo →
                </a>
              )}
              <button
                onClick={() => deleteProject(p._id)}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-all duration-200"
              >
                Delete Project
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProjectsPage;
