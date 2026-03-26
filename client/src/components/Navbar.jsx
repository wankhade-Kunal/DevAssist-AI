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
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 text-purple-900 dark:bg-slate-900 dark:text-white shadow-lg backdrop-blur-md">
      
      {/* Logo */}
      <h1
        className="text-xl font-bold cursor-pointer tracking-wide"
        onClick={() => navigate("/")}
      >
        DevAssist AI
      </h1>

      {/* Right Side */}
      <div className="flex items-center space-x-6">
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-full px-3 py-2 bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 transition-all font-medium text-sm"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Features */}
        <button
          onClick={() => navigate("/#features")}
          className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
        >
          Features
        </button>

        {/* Dashboard */}
        <button
          onClick={() => navigate("/chat")}
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
        >
          Dashboard
        </button>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hover:text-red-500 transition-colors"
          >
            Logout
          </button>
        ) : (
          <>
            {/* Login */}
            <button
              onClick={() => navigate("/login")}
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              Login
            </button>

            {/* Get Started */}
            <button
              onClick={() => navigate("/signup")}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all"
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