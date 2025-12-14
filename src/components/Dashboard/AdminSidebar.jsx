import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const AdminSidebar = ({ activeSection, setActiveSection }) => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { key: "userinfo", label: "User Info" },
    { key: "about", label: "About" },
    { key: "skills", label: "Skills" },
    { key: "projects", label: "Projects" },
  ];

  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-gray-900 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
        <button onClick={() => setOpen(true)}>
          <FiMenu size={26} />
        </button>
      </div>
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0   /* Always visible on desktop */
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700 md:hidden">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
          <button onClick={() => setOpen(false)}>
            <FiX size={26} />
          </button>
        </div>

        <nav className="mt-4 space-y-1 p-2">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                setActiveSection(item.key);
                setOpen(false);
              }}
              className={`block w-full text-left px-5 py-3 rounded-lg text-lg
                ${
                  activeSection === item.key
                    ? "bg-cyan-400 text-black"
                    : "hover:bg-gray-700"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
