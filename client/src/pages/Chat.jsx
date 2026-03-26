import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Send } from "lucide-react";

function Chat() {
  const [fromLang, setFromLang] = useState("javaScript");
  const [toLang, setToLang] = useState("Python");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mode = searchParams.get("mode") || "general";
  const token = localStorage.getItem("token");

  // Protect route
  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  // Load history
  useEffect(() => {
    if (!token || mode !== "history") return;

    fetch("http://localhost:5000/api/ai/history", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }
        return res.json();
      })
      .then((data) => setChat(Array.isArray(data) ? data : []))
      .catch(() => alert("Failed to load chat"));
  }, [token, navigate, mode]);

  // Send message
  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt: message, mode }),
      });

      const data = await res.json();

      // MOCK AI BASED ON MODE
      let reply = "";

      if (mode === "explain") {
        reply = `📘 Code Explanation:\n\nYour code:\n${message}\n\nThis code works step-by-step and processes the logic based on given input.`;
      } else if (mode === "bug") {
        reply = `🐞 Bug Detection:\n\nChecking your code:\n${message}\n\n⚠️ Possible issues:\n- Missing variable declarations\n- Logic errors\n- Edge cases not handled`;
      } else if (mode === "readme") {
        reply = `# 🚀 Project README

## Description
${message}

## Features
- Fast
- Scalable
- Easy to use

## Installation
npm install

## Usage
npm start`;
      } else if (mode === "optimize") {
        reply = `⚡ Optimization:\n\nYour code:\n${message}\n\n✅ Improvements:\n- Reduce loops
- Use better algorithms
- Optimize memory usage`;
      } else if (mode === "convert") {
        reply = `🔁 Code Conversion:
From: ${fromLang}
To: ${toLang}

Original Code:
${message}

Converted Code (example):
// Converted from ${fromLang} to ${toLang}
console.log("Converted Successfully");`;
      } else {
        reply = `🤖 AI Response:\n\nYou said: "${message}"\n\nHere’s a helpful answer based on your input.`;
      }

      // Add user + empty AI message
      setChat((prev) => [
        ...prev,
        { role: "user", content: message },
        { role: "assistant", content: "" },
      ]);

      setMessage("");
      await new Promise((res) => setTimeout(res, 500));

      // Typing animation
      const words = reply.split(" ");
      let current = "";
      let i = 0;

      const interval = setInterval(() => {
        setChat((prev) => {
          if (!prev || prev.length === 0) return prev;

          const updated = [...prev];

          if (updated[updated.length - 1]?.role === "assistant") {
            updated[updated.length - 1].content = current;
          }

          return updated;
        });

        if (i < words.length) {
          current += words[i] + " ";
          i++;
        } else {
          clearInterval(interval);
          setLoading(false);
        }
      }, 40);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    // <div
    //   className="min-h-screen transition-colors duration-300"
    //   style={{
    //     background:
    //       "linear-gradient(to bottom right, var(--bg-start), var(--bg-end))",
    //     color: "var(--text-color)",
    //   }}
    // >
    <div className="min-h-screen bg-red-500 dark:bg-blue-500"
       style={{
  background: "linear-gradient(to bottom right, var(--bg-start), var(--bg-end))",
  color: "var(--text-color)",
}}
   >
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-slate-800">
        {/*Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-white dark:bg-slate-800 focus:ring-2 focus:ring-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-black transition border border-gray-300 dark:border-slate-600"
          >
            ⬅ Home
          </button>

          <h1
            className={`font-semibold ${mode === "explain" ? "text-purple-500" : mode === "bug" ? "text-red-500" : mode === "readme" ? "text-blue-500" : mode === "optimize" ? "text-yellow-500" : mode === "convert" ? "text-cyan-500" : "text-purple-400"}`}
          >
            DevAssist AI ({mode})
          </h1>
        </div>

        {/*Right Side*/}
        <div className="space-x-4 flex items-center">
          <button onClick={() => setChat([])} className="hover:text-yellow-400">
            Clear
          </button>

          <button
            onClick={() => navigate("/chat")}
            className="hover:text-indigo-400"
          >
            Chat
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            className="hover:text-red-400"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto flex justify-center px-4 py-6">
        <div className="w-full max-w-3xl space-y-6">
          {/* Empty State */}
          {chat.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">
                How can I help you today?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {mode === "explain"
                  ? "📘 Paste your code below to get explanation"
                  : mode === "bug"
                    ? "🐞 Paste your code to detect bugs"
                    : mode === "readme"
                      ? "📄 Describe your project to generate README"
                      : mode === "optimize"
                        ? "⚡ Paste your code to optimize it"
                        : mode === "convert"
                          ? "🔁 Convert code between languages"
                          : "Start a conversation"}
              </p>
              {mode === "convert" && (
                <div className="flex justify-center gap-3">
                  <select
                    value={fromLang}
                    onChange={(e) => setFromLang(e.target.value)}
                    className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-gray-300 dark:border-slate-600"
                  >
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>C++</option>
                  </select>
                  <span>➡</span>
                  <select
                    value={toLang}
                    onChange={(e) => setToLang(e.target.value)}
                    className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-gray-300 dark:border-slate-600"
                  >
                    <option>Python</option>
                    <option>JavaScript</option>
                    <option>Java</option>
                    <option>C++</option>
                  </select>
                </div>
              )}
            </div>
          )}

          {/* Mode UI - removed as integrated into empty state */}

          {/* FIXED MESSAGE LOOP (IMPORTANT) */}
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-5 py-3 rounded-2xl max-w-xl relative shadow-md ${
                  msg.role === "user"
                    ? "bg-orange-500 text-black"
                    : "bg-[#f5e6d3] dark:bg-slate-800 text-purple-900 dark:text-white"
                }`}
              >
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 opacity-70">
                  {msg.role === "user" ? "You" : "DevAssist AI"}
                </p>

                <p className="whitespace-pre-wrap">{msg.content || ""}</p>

                {msg.role === "assistant" && msg.content && (
                  <button
                    onClick={() => navigator.clipboard.writeText(msg.content)}
                    className="absolute top-1 right-1 text-xs bg-white dark:bg-slate-700 px-2 py-1 rounded hover:bg-purple-500"
                  >
                    📋
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Loading */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#f5e6d3] dark:bg-slate-800 px-4 py-2 rounded-lg animate-pulse text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                DevAssist is typing...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-gray-300 dark:border-slate-700 p-4 flex justify-center">
        <div className="w-full max-w-3xl flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder={
              mode === "explain"
                ? "Paste your code here to get an explanation..."
                : mode === "bug"
                  ? "Paste your code here to detect bugs..."
                  : mode === "readme"
                    ? "Describe your project here..."
                    : mode === "optimize"
                      ? "Paste your code here to optimize..."
                      : mode === "convert"
                        ? "Paste your code here to convert..."
                        : "Ask me anything about coding..."
            }
            className="flex-1 bg-white dark:bg-slate-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 border border-gray-300 dark:border-slate-600"
          />

          <button
            onClick={sendMessage}
            className="bg-orange-500 px-5 rounded-xl text-black hover:bg-orange-600 shadow-md flex items-center gap-2"
          >
            <Send size={16} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
