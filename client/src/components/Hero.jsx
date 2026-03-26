import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-between text-center py-32 px-6">

      <h1 className="text-5xl font-bold mb-6">
        AI Developer Assistant
      </h1>

      <p className="text-lg text-purple-900 max-w-2xl mb-8">
        DevAssist AI helps developers analyze code, detect bugs,
        generate README files and improve their projects using AI.
      </p>

      <div className="space-x-4">
        <button
          onClick={() => navigate("/chat")}
          className="bg-purple-800 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors"
        >
          Start Chatting
        </button>

        <button
          onClick={() => navigate("/learn-more")}
          className="border border-purple-600 text-purple-700 hover:bg-purple-100 px-6 py-3 rounded-xl">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default Hero;
