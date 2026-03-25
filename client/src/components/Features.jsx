import { useNavigate } from "react-router-dom";
import { Code, Bug, FileText, Zap, History, Activity } from "lucide-react";
import { RefreshCcw } from "lucide-react";

function Features() {
  const navigate = useNavigate();

  return (
    <>
      <section id="features" className="py-20 px-8 bg-slate-800 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful AI Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Code Explainer */}
          <div
            onClick={() => navigate("/chat?mode=explain")}
            className="bg-slate-900 p-6 rounded-xl cursor-pointer hover:scale-105 hover:bg-slate-700 hover:shadow-lg transition-all duration-300 shadow-md"
          >
            <Code className="mb-4 text-indigo-400" size={30} />
            <h3 className="text-xl font-semibold mb-2">Code Explainer</h3>
            <p className="text-gray-400">
              Paste your code and get a clear explanation of how it works.
            </p>
          </div>

          {/* Bug Detector */}
          <div
            onClick={() => navigate("/chat?mode=bug")}
            className="bg-slate-900 p-6 rounded-xl cursor-pointer hover:scale-105 hover:bg-slate-700 hover:shadow-lg transition-all duration-300 shadow-md"
          >
            <Bug className="mb-4 text-red-400" size={30} />
            <h3 className="text-xl font-semibold mb-2">Bug Detector</h3>
            <p className="text-gray-400">
              Detect possible bugs and improve your code with AI suggestions.
            </p>
          </div>

          {/* README Generator */}
          <div
            onClick={() => navigate("/chat?mode=readme")}
            className="bg-slate-900 p-6 rounded-xl cursor-pointer hover:scale-105 hover:bg-slate-700 hover:shadow-lg transition-all duration-300 shadow-md"
          >
            <FileText className="mb-4 text-green-400" size={30} />
            <h3 className="text-xl font-semibold mb-2">README Generator</h3>
            <p className="text-gray-400">
              Generate professional README files for your GitHub projects.
            </p>
          </div>

          {/* Code Optimizer */}
          <div
            onClick={() => navigate("/chat?mode=optimize")}
            className="bg-slate-900 p-6 rounded-xl cursor-pointer hover:scale-105 hover:bg-slate-700 hover:shadow-lg transition-all duration-300 shadow-md"
          >
            <Zap className="mb-4 text-yellow-400" size={30} />
            <h3 className="text-xl font-semibold mb-2">Code Optimizer</h3>
            <p className="text-gray-400">
              Optimize your code for better performance and readability.
            </p>
          </div>

          {/* Chat History */}
          <div
            onClick={() => navigate("/chat?mode=history")}
            className="bg-slate-900 p-6 rounded-xl cursor-pointer hover:scale-105 hover:bg-slate-700 hover:shadow-lg transition-all duration-300 shadow-md"
          >
            <History className="mb-4 text-purple-400" size={30} />
            <h3 className="text-xl font-semibold mb-2">Chat History</h3>
            <p className="text-gray-400">
              Save and revisit your previous AI conversations anytime.
            </p>
          </div>

          {/* Code Converter */}
          <div
            onClick={() => navigate("/chat?mode=convert")}
            className="bg-slate-900 p-6 rounded-xl cursor-pointer hover:scale-105 hover:bg-slate-700 transition-all duration-300"
          >
            <RefreshCcw className="mb-4 text-cyan-400" size={30} />

            <h3 className="text-xl font-semibold mb-2">Code Converter</h3>
            <p className="text-gray-400">
              Convert code from one programming language to another.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
