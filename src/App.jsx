import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import PrivateRoutes from "./utils/PrivateRoutes";

// Admin Pages
import UserInfo from "./pages/Admin/UserInfo.jsx";
import AboutPage from "./pages/Admin/AboutPage.jsx";
import SkillsPage from "./pages/Admin/SkillsPage.jsx";
import ProjectsPage from "./pages/Admin/ProjectsPage.jsx";

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/admin-login", "/admin", "/admin/userinfo", "/admin/about", "/admin/skills", "/admin/projects"];
  let shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <PrivateRoutes>
              <Admin />
            </PrivateRoutes>
          }
        >
          <Route index element={<UserInfo />} />
          <Route path="userinfo" element={<UserInfo />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
