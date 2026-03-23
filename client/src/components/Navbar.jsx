function Navbar() {
  return (
    <nav className="bg-slate-900 text-white flex justify-between items-center px-8 py-4">
      <h1 className="text-xl font-bold">DevAssist AI</h1>

      <div className="space-x-6">
        <a href="#" className="hover:text-indigo-400">Features</a>
        <a href="#" className="hover:text-indigo-400">Pricing</a>
        <a href="#" className="hover:text-indigo-400">Login</a>
        <button className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600">
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar