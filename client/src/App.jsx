import { Routes, Route, useLocation } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Chat from "./pages/Chat";
import LearnMore from "./pages/LearnMore";

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  }, [darkMode]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, darkMode, toggleTheme }}>
      <div className="min-h-screen bg-linear-to-br from-[#f5e6d3] to-[#fdf6ec] dark:from-slate-950 dark:to-slate-900 text-purple-900 dark:text-white transition-colors duration-300">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/chat" element={<Chat />} />
          <Route path="learn-more" element={<LearnMore />} />
        </Routes>

        {location.pathname !== '/chat' && <Footer />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
