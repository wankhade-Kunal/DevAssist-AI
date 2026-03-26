import { useNavigate } from "react-router-dom";
import { Code, Bug, FileText, Zap, History, RefreshCcw } from "lucide-react";

function Features() {
  const navigate = useNavigate();

  return (
    <section
      id="features"
      className="py-20 px-8 bg-linear-to-b from-[#fdf6ec] to-[#f5e6d3] text-purple-900 dark:from-slate-950 dark:to-slate-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Powerful AI Tools
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Code Explainer */}
        <div
          onClick={() => navigate("/chat?mode=explain")}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl cursor-pointer 
          shadow-md hover:shadow-lg hover:scale-105 
          transition-all duration-300"
        >
          <Code className="mb-4 text-indigo-500" size={30} />
          <h3 className="text-xl font-semibold mb-2">Code Explainer</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Paste your code and get a clear explanation of how it works.
          </p>
        </div>

        {/* Bug Detector */}
        <div
          onClick={() => navigate("/chat?mode=bug")}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl cursor-pointer 
          shadow-md hover:shadow-lg hover:scale-105 
          transition-all duration-300"
        >
          <Bug className="mb-4 text-red-500" size={30} />
          <h3 className="text-xl font-semibold mb-2">Bug Detector</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Detect possible bugs and improve your code with AI suggestions.
          </p>
        </div>

        {/* README Generator */}
        <div
          onClick={() => navigate("/chat?mode=readme")}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl cursor-pointer 
          shadow-md hover:shadow-lg hover:scale-105 
          transition-all duration-300"
        >
          <FileText className="mb-4 text-green-500" size={30} />
          <h3 className="text-xl font-semibold mb-2">README Generator</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Generate professional README files for your GitHub projects.
          </p>
        </div>

        {/* Code Optimizer */}
        <div
          onClick={() => navigate("/chat?mode=optimize")}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl cursor-pointer 
          shadow-md hover:shadow-lg hover:scale-105 
          transition-all duration-300"
        >
          <Zap className="mb-4 text-yellow-500" size={30} />
          <h3 className="text-xl font-semibold mb-2">Code Optimizer</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Optimize your code for better performance and readability.
          </p>
        </div>

        {/* Chat History */}
        <div
          onClick={() => navigate("/chat?mode=history")}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl cursor-pointer 
          shadow-md hover:shadow-lg hover:scale-105 
          transition-all duration-300"
        >
          <History className="mb-4 text-purple-500" size={30} />
          <h3 className="text-xl font-semibold mb-2">Chat History</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Save and revisit your previous AI conversations anytime.
          </p>
        </div>

        {/* Code Converter */}
        <div
          onClick={() => navigate("/chat?mode=convert")}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl cursor-pointer 
          shadow-md hover:shadow-lg hover:scale-105 
          transition-all duration-300"
        >
          <RefreshCcw className="mb-4 text-cyan-500" size={30} />
          <h3 className="text-xl font-semibold mb-2">Code Converter</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Convert code from one programming language to another.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;