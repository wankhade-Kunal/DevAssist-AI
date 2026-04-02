import { useNavigate } from "react-router-dom";

function LearnMore() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-8 py-12 sm:py-16 transition-colors duration-300">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            ← Back Home
          </button>
        </div>

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            About DevAssist AI
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            DevAssist AI is an AI-powered developer assistant designed to help
            programmers write better code, debug faster, and improve productivity.
          </p>
        </div>

        {/* What is this project */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🚀 What This Project Does</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            This project helps developers solve real-world coding problems using AI.
            Instead of searching multiple resources, you can directly interact with
            AI to understand code, fix errors, and improve your logic.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            🔥 Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">📘 Code Explanation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get step-by-step explanations of complex code in simple language.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">🐞 Bug Detection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identify errors in your code and receive suggestions to fix them.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">⚡ Code Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Improve performance and readability of your code.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">🔁 Code Conversion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Convert code from one programming language to another.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">📄 README Generator</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatically generate professional README files for GitHub.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2">🕘 Chat History</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Save and revisit previous conversations anytime.
              </p>
            </div>

          </div>
        </div>

        {/* Why this project */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            💡 Why This Project Matters
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Developers often waste time switching between multiple platforms
            like Stack Overflow, documentation, and tutorials. DevAssist AI
            solves this problem by bringing everything into one place with
            AI-powered assistance.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/chat")}
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition transform hover:scale-110"
          >
            Start Using DevAssist AI →
          </button>
        </div>

      </div>
    </div>
  );
}

export default LearnMore;