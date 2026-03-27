import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, darkMode, toggleTheme } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 dark:bg-gray-900/70 text-gray-900 dark:text-white backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300">
      
      {/* Logo */}
      <h1
        className="text-2xl font-bold cursor-pointer tracking-tight bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
        onClick={() => navigate("/")}
      >
        DevAssist AI
      </h1>

      {/* Right Side */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-full p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Features */}
        <button
          onClick={() => navigate("/#features")}
          className="hidden sm:block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-300"
        >
          Features
        </button>

        {/* Dashboard */}
        <button
          onClick={() => navigate("/dashboard")}
          className="hidden sm:block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-300"
        >
          Dashboard
        </button>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors duration-300"
          >
            Logout
          </button>
        ) : (
          <>
            {/* Login */}
            <button
              onClick={() => navigate("/login")}
              className="hidden sm:block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-300"
            >
              Login
            </button>

            {/* Get Started */}
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;