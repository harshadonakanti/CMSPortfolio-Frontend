import React, { useState } from "react";
import AdminSidebar from "../components/Dashboard/AdminSidebar";

import UserInfo from "./Admin/UserInfo.jsx";
import AboutPage from "./Admin/AboutPage.jsx";
import SkillsPage from "./Admin/SkillsPage.jsx";
import ProjectsPage from "./Admin/ProjectsPage.jsx";




const Admin = () => {
  const [activeSection, setActiveSection] = useState("userinfo");

  const renderSection = () => {
    switch (activeSection) {
      case "userinfo":
        return <UserInfo />;
      case "about":
        return <AboutPage />;
      case "skills":
        return <SkillsPage />;
      case "projects":
        return <ProjectsPage />;
      default:
        return <UserInfo />;
    }
  };

  return (
    <div className="flex">
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="ml-0 md:ml-64 p-6 w-full min-h-screen bg-gray-100">
        {renderSection()}
      </main>
    </div>
  );
};

export default Admin;
