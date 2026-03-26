import { useNavigate } from "react-router-dom";

function LearnMore() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen text-white px-8 py-16 from-[#f5e6d3] to-[#fdf6ec]">

            <div className="mb-6">
                <button onClick={() => navigate("/")}
                    className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-lg hover:bg-slate-700 transition">
                        ⬅ Home
                </button>

            </div>
            <h1 className="text-4xl font-bold text-center mb-10 text-purple-800">
                What DevAssist AI can do
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">

                <div>
                    <h2 className="text-2xl font-semibold text-indigo-600">📘 Code Explanation</h2>
                    <p className="text-black">Understand complex code in seconds. Paste your code and get
                        step-by-step explanations.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-red-600">🐞 Bug Detection</h2>
                    <p className="text-black">Detect errors and improve your code with smart debugging suggestions.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-green-600" >⚡ Code Optimization</h2>
                    <p className="text-black">Improve performance and readability of your code.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-purple-600" >🕘 Chat History</h2>
                    <p className="text-black">Save and revisit your previous AI conversations anytime.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-pink-600" >🔁 Code Conversion</h2>
                    <p className="text-black">Convert code between programming languages easily.</p>
                </div>

            </div>
        </div>
    );
}

export default LearnMore;