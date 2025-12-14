import React, { useState, useEffect } from "react";
import axios from "axios";

const UserInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/userinfo", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success && res.data.data) {
          const info = res.data.data;
          setFormData({
            name: info.name,
            role: info.role,
            description: info.description,
            image: null,
          });

          setExistingImage(info.image);
        }
      } catch (err) {
        console.log("Error fetching user info", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("role", formData.role);
    fd.append("description", formData.description);
    if (formData.image) {
      fd.append("image", formData.image);
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/userinfo/save",
        fd,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        alert("User info updated!");
      }
    } catch (err) {
      console.log("Saving failed", err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full flex justify-center items-start pt-10 pb-20 px-4">
      <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">User Information</h1>

        <form onSubmit={handleSubmit} className="space-y-6">


          <div className="flex flex-col items-center">
            {!previewImage && existingImage && (
              <img
                src={`http://localhost:3000/uploads/${existingImage}`}
                className="w-32 h-32 rounded-full object-cover border shadow mb-3"
                alt="Existing"
              />
            )}
            {previewImage && (
              <img
                src={previewImage}
                className="w-32 h-32 rounded-full object-cover border shadow mb-3"
                alt="Preview"
              />
            )}

            <label className="cursor-pointer bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900">
              Upload Image
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </label>
          </div>
          <div>
            <label className="font-semibold text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>
          <div>
            <label className="font-semibold text-gray-700">Role / Position</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>
          <div>
            <label className="font-semibold text-gray-700">Short Description</label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-teal-400 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 text-lg font-semibold"
          >
            Save Changes
          </button>

        </form>
      </div>
    </div>
  );
};

export default UserInfo;
