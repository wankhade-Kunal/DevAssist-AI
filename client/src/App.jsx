import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Footer from "./components/Footer"

import Login from "./pages/Login"
import Signup from "./pages/Signup"

import Chat from "./pages/Chat"

function App() {
  return (
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
  )
}

export default App
