import { useNavigate } from "react-router-dom";

function Features() {
  const navigate = useNavigate();

  return (
    <section
      id="features"
      className="py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-slate-950 text-gray-900 dark:text-white"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 to-orange-600 dark:from-white dark:to-orange-400 bg-clip-text text-transparent">
        Powerful AI Tools
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
        Everything you need to boost your development workflow
      </p>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        
        {/* Code Explainer */}
        <div
          onClick={() => navigate("/chat?mode=explain")}
          className="group p-7 sm:p-8 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1"
        >
          <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📘</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Code Explainer</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Paste your code and get a clear explanation of how it works.
          </p>
        </div>

        {/* Bug Detector */}
        <div
          onClick={() => navigate("/chat?mode=bug")}
          className="group p-7 sm:p-8 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1"
        >
          <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🐞</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Bug Detector</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Detect possible bugs and improve your code with AI suggestions.
          </p>
        </div>

        {/* README Generator */}
        <div
          onClick={() => navigate("/chat?mode=readme")}
          className="group p-7 sm:p-8 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1"
        >
          <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📄</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">README Generator</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Generate professional README files for your GitHub projects.
          </p>
        </div>

        {/* Code Optimizer */}
        <div
          onClick={() => navigate("/chat?mode=optimize")}
          className="group p-7 sm:p-8 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1"
        >
          <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Code Optimizer</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Optimize your code for better performance and readability.
          </p>
        </div>

        {/* Chat History */}
        <div
          onClick={() => navigate("/chat?mode=history")}
          className="group p-7 sm:p-8 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1"
        >
          <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🕘</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Chat History</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Save and revisit your previous AI conversations anytime.
          </p>
        </div>

        {/* Code Converter */}
        <div
          onClick={() => navigate("/chat?mode=convert")}
          className="group p-7 sm:p-8 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1"
        >
          <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🔄</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Code Converter</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Convert code from one programming language to another.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;