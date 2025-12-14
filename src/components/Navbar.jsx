
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="fixed w-full z-50 bg-linear-to-r from-[#a33757]  to-[#2d050b] backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-black text-4xl font-bold">
            Harsha's
            <span className="text-2xl text-white font-semibold">
              {" "}
              Portfolio
            </span>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#"
            className="relative text-white transition duration-300 hover:text-gray-100 hover:scale-110 hover:transition ease-in group text-lg font-semibold"
          >
            <span>Home</span>
          </a>
          <a
            href="#about"
            className="relative text-white transition duration-300 hover:text-gray-100 group text-lg font-semibold hover:scale-110 hover:transition ease-in"
          >
            <span>About</span>
          </a>
          <a
            href="#skills"
            className="relative text-white transition duration-300 hover:text-gray-100 group text-lg font-semibold hover:scale-110 hover:transition ease-in"
          >
            <span>Skills</span>
          </a>
          <a
            href="#projects"
            className="relative text-white transition duration-300 hover:text-gray-100 group text-lg font-semibold hover:scale-110 hover:transition ease-in"
          >
            <span>Projects</span>
          </a>
          <a
            href="#contact"
            className="relative text-white transition duration-300 hover:text-gray-100 group text-lg font-semibold hover:scale-110 hover:transition ease-in"
          >
            <span>Contact</span>
          </a>
        </div>
        {/* mobile responsive */}
        <div className="md:hidden">
          {
            showMenu? <X onClick={()=>{
              setShowMenu(!showMenu)
            }} className="text-2xl cursor-pointer" />:<Menu onClick={()=>{
              setShowMenu(!showMenu)
            }}className="text-2xl cursor-pointer" />
          }
        </div>
        {/* ////// */}
      </div>

      {
        showMenu && (
          <div className="md:hidden mt-4 bg-gray-400 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center" >
                      <a onClick={()=>{
              setShowMenu(!showMenu)
            }}
            href="#Home"
            className="relative text-white transition duration-300 hover:text-cyan-500 group"
          >
            <span>Home</span>
          </a>
          <a onClick={()=>{
              setShowMenu(!showMenu)
            }}
            href="#about"
            className="relative text-white transition duration-300 hover:text-cyan-500 group"
          >
            <span>About</span>
          </a>
          <a onClick={()=>{
              setShowMenu(!showMenu)
            }}
            href="#skills"
            className="relative text-white transition duration-300 hover:text-cyan-500 group"
          >
            <span>Skills</span>
          </a>
          <a onClick={()=>{
              setShowMenu(!showMenu)
            }}
            href="#projects"
            className="relative text-white transition duration-300 hover:text-cyan-500 group"
          >
            <span>Projects</span>
          </a>
          <a onClick={()=>{
              setShowMenu(!showMenu)
            }}
            href="#contact"
            className="relative text-white transition duration-300 hover:text-cyan-500 group"
          >
            <span>Contact</span>
          </a>
          </div>
        )
      }
    </nav>
  );
};

export default Navbar;
