import { useState } from "react"

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault()

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    const data = await res.json()
    setMessage(data.message)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white">

      <div className="bg-slate-800 p-8 rounded-xl w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-indigo-500 py-3 rounded-lg hover:bg-indigo-600">
            Sign Up
          </button>

        </form>

        {message && (
          <p className="text-green-400 mt-4 text-center">
            {message}
          </p>
        )}

      </div>

    </div>
  )
}

export default Signup