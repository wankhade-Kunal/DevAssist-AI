function Features() {
  return (
    <section className="py-20 px-8 bg-slate-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Powerful AI Tools
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-slate-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Code Explainer</h3>
          <p className="text-gray-400">
            Paste your code and get a clear explanation of how it works.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Bug Detector</h3>
          <p className="text-gray-400">
            Detect possible bugs and improve your code with AI suggestions.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">README Generator</h3>
          <p className="text-gray-400">
            Generate professional README files for your GitHub projects.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Features