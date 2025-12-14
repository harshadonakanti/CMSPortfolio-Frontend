import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutPage = () => {
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const loadAbout = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/about");
        if (res.data.success && res.data.data) {
          setDescription(res.data.data.description);
        }
      } catch (err) {
        console.log(err);
      }
    };

    loadAbout();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/about/save",
        { description },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        alert("About section updated!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex justify-center items-start pt-10 pb-20 px-4">
      <div className="bg-white shadow-xl border rounded-xl p-8 w-full max-w-3xl">

        <h1 className="text-3xl font-bold mb-6">About Section</h1>
        <p className="text-gray-600 mb-6">Edit your about section text here.</p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <textarea
            rows="6"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write something about yourself..."
            className="w-full border p-4 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 text-lg font-semibold"
          >
            Save Changes
          </button>

        </form>

      </div>
    </div>
  );
};

export default AboutPage;
