import { Routes, Route, useLocation } from "react-router-dom"
import { createContext, useState, useEffect } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Footer from "./components/Footer"

import Login from "./pages/Login"
import Signup from "./pages/Signup"

import Chat from "./pages/Chat"

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

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

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="bg-slate-900 min-h-screen text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
            </>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/chat" element={<Chat />} />
        </Routes>

        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default App
