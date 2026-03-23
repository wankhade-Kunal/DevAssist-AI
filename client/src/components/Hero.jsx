function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6">
      
      <h1 className="text-5xl font-bold mb-6">
        AI Developer Assistant
      </h1>

      <p className="text-lg text-gray-400 max-w-2xl mb-8">
        DevAssist AI helps developers analyze code, detect bugs,
        generate README files and improve their projects using AI.
      </p>

      <div className="space-x-4">
        <button className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600">
          Start Free
        </button>

        <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800">
          View Demo
        </button>
      </div>

    </section>
  )
}

export default Hero