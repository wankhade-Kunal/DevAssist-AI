import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-slate-950 dark:to-gray-900 min-h-[70vh]">

      <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-600 dark:from-white dark:to-orange-400 bg-clip-text text-transparent leading-tight">
        AI Developer Assistant
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 font-light">
        DevAssist AI helps developers analyze code, detect bugs,
        generate README files and improve their projects using AI.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
        <button
          onClick={() => navigate("/chat")}
          className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        >
          Start Chatting →
        </button>

        <button
          onClick={() => navigate("/learn-more")}
          className="px-8 py-3.5 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-orange-500 dark:hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/30 font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default Hero;
