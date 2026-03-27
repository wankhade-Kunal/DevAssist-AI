import { useNavigate } from "react-router-dom";

function LearnMore() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-slate-950 text-gray-900 dark:text-white px-4 sm:px-8 py-12 sm:py-16 transition-colors duration-300">

            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <button onClick={() => navigate("/")}
                        className="px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 font-medium transition-all duration-300 transform hover:scale-105 border border-gray-300 dark:border-gray-700">
                        ← Back Home
                    </button>
                </div>

                <div className="mb-16">
                    <h1 className="text-5xl sm:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-orange-600 dark:from-white dark:to-orange-400 bg-clip-text text-transparent">
                        What DevAssist AI Can Do
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore all the powerful AI-powered tools to boost your development workflow
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

                    <div className="group p-8 sm:p-10 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                        <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📘</div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Code Explanation</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            Understand complex code in seconds. Paste your code and get clear, step-by-step explanations of how it works.
                        </p>
                    </div>

                    <div className="group p-8 sm:p-10 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                        <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🐞</div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Bug Detection</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            Detect errors and improve your code with smart debugging suggestions powered by AI.
                        </p>
                    </div>

                    <div className="group p-8 sm:p-10 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                        <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Code Optimization</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            Improve performance and readability of your code with intelligent optimization suggestions.
                        </p>
                    </div>

                    <div className="group p-8 sm:p-10 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                        <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🕘</div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Chat History</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            Save and revisit your previous AI conversations anytime. Keep track of all your interactions.
                        </p>
                    </div>

                    <div className="group p-8 sm:p-10 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                        <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">🔁</div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Code Conversion</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            Convert code between programming languages easily with AI assistance.
                        </p>
                    </div>

                    <div className="group p-8 sm:p-10 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                        <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">📄</div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">README Generator</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            Generate professional README files for your GitHub projects in seconds.
                        </p>
                    </div>

                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => navigate("/chat")}
                        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 text-lg"
                    >
                        Get Started Now →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LearnMore;