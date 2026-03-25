import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

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
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700">
        <h1 className="text-indigo-400 font-semibold">DevAssist AI ({mode})</h1>

        <div className="space-x-4">
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
            Logout
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto flex justify-center px-4 py-6">
        <div className="w-full max-w-3xl space-y-4">
          {/* Empty State */}
          {chat.length === 0 && (
            <div className="text-center text-gray-400 mt-20">
              <p className="text-lg">Start a conversation</p>
            </div>
          )}

          {/* Mode UI */}
          {mode === "explain" && (
            <div className="text-center text-gray-400">
              <p>📘 Paste your code below to get explanation</p>
            </div>
          )}

          {mode === "bug" && (
            <div className="text-center text-gray-400">
              <p>🐞 Paste your code to detect bugs</p>
            </div>
          )}

          {mode === "readme" && (
            <div className="text-center text-gray-400">
              <p>📄 Describe your project to generate README</p>
            </div>
          )}

          {mode === "optimize" && (
            <div className="text-center text-gray-400">
              <p>⚡ Paste your code to optimize it</p>
            </div>
          )}

          {mode === "convert" && (
            <div className="text-center text-gray-400 space-y-3">
              <p>🔁 Convert code between languages</p>

              <div className="flex justify-center gap-3">
                <select
                  value={fromLang}
                  onChange={(e) => setFromLang(e.target.value)}
                  className="bg-slate-800 p-2 rounded-lg"
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
                  className="bg-slate-800 p-2 rounded-lg"
                >
                  <option>Python</option>
                  <option>JavaScript</option>
                  <option>Java</option>
                  <option>C++</option>
                </select>
              </div>
            </div>
          )}

          {/* ✅ FIXED MESSAGE LOOP (IMPORTANT) */}
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-3 rounded-xl max-w-lg relative ${
                  msg.role === "user" ? "bg-indigo-600" : "bg-slate-800"
                }`}
              >
                <p className="text-xs text-gray-400 mb-1">
                  {msg.role === "user" ? "You" : "DevAssist AI"}
                </p>

                <p className="whitespace-pre-wrap">{msg.content || ""}</p>

                {msg.role === "assistant" && msg.content && (
                  <button
                    onClick={() => navigator.clipboard.writeText(msg.content)}
                    className="absolute top-1 right-1 text-xs bg-slate-700 px-2 py-1 rounded hover:bg-slate-600"
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
              <div className="bg-slate-800 px-4 py-2 rounded-lg animate-pulse text-gray-400">
                DevAssist is thinking...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-slate-700 p-4 flex justify-center">
        <div className="w-full max-w-3xl flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask me anything about coding..."
            className="flex-1 bg-slate-800 p-3 rounded-lg outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-indigo-600 px-5 rounded-lg hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
