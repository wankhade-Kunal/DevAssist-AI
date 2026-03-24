import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-slate-900 text-white flex justify-between items-center px-8 py-4">
      <h1 className="text-xl font-bold">DevAssist AI</h1>

      <div className="space-x-6">
        {/* Features (scroll) */}
        <button
          onClick={() => navigate("/#features")}
          className="hover:text-indigo-400 transition-colors"
        >
          Features
        </button>

        {/* Dashboard */}
        <button
          onClick={() => navigate("/chat")}
          className="hover:text-indigo-400 transition-colors"
        >
          Dashboard
        </button>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hover:text-indigo-400 transition-colors"
          >
            Logout
          </button>
        ) : (
          <>
            {/* Login (page) */}
            <button
              onClick={() => navigate("/login")}
              className="hover:text-indigo-400 transition-colors"
            >
              Login
            </button>

            {/* Get Started (signup page) */}
            <button
              onClick={() => navigate("/signup")}
              className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all"
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
