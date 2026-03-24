import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-900 text-white flex justify-between items-center px-8 py-4">
      <h1 className="text-xl font-bold">DevAssist AI</h1>

      <div className="space-x-6">
        {/* Features (scroll) */}
        <button
          onClick={() => navigate("/#feature")}
          className="hover:text-indigo-400"
        >
          Features
        </button>

        {/* Pricing (scroll) */}
        <button
          onClick={() => {
            document
              .getElementById("pricing")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-indigo-400"
        >
          Pricing
        </button>

        {/* Login (page) */}
        <button
          onClick={() => navigate("/login")}
          className="hover:text-indigo-400"
        >
          Login
        </button>

        {/* Get Started (signup page) */}
        <button
          onClick={() => navigate("/signup")}
          className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
