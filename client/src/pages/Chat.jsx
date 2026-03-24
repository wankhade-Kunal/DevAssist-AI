import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mode = searchParams.get("mode") || "general";
  const token = localStorage.getItem("token");

  // Protect route
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Load chat history (always refresh, and in 'history' mode show the stored history cards)
  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:5000/api/ai/history", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }
        return res.json();
      })
      .then((data) => {
        setChat(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        alert("Failed to load chat");
      });
  }, [token, navigate, mode]);

  // Send message
  const sendMessage = async () => {
    if (!message.trim()) return;
    if (!token) {
      navigate("/login");
      return;
    }

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

      if (res.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      const data = await res.json();

      if (!data.reply) {
        alert("AI failed to respond");
        setLoading(false);
        return;
      }

      // Add user + empty AI message
      setChat((prev) => [
        ...prev,
        { role: "user", content: message },
        { role: "assistant", content: "" },
      ]);

      setMessage("");

      // Typing animation
      const words = data.reply.split(" ");
      let currentText = "";
      let index = 0;

      const interval = setInterval(() => {
        if (index < words.length) {
          currentText += words[index] + " ";

          setChat((prev) => {
            const updated = [...prev];
            updated[updated.length - 1].content = currentText;
            return updated;
          });

          index++;
        } else {
          clearInterval(interval);
          setLoading(false);
        }
      }, 50);

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      
      {/* Header */}
      <div className="bg-slate-800 p-4 text-center">
        <h1 className="text-2xl font-bold">
          DevAssist AI - {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode
        </h1>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {mode === "history" ? (
          <>
            <h2 className="text-2xl font-semibold text-center mb-4">Saved Search History</h2>
            {Array.isArray(chat) && chat.length > 0 ? (
              <div className="grid gap-3">
                {chat.reduce((groups, item) => {
                  if (item.role === "user") groups.push({ user: item.content, assistant: null });
                  else if (groups.length === 0) groups.push({ user: "", assistant: item.content });
                  else groups[groups.length - 1].assistant = item.content;
                  return groups;
                }, []).map((entry, index) => (
                  <div key={index} className="bg-slate-800 border border-gray-700 p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-400">User Search</p>
                    <p className="text-white font-medium mb-2">{entry.user || "(empty)"}</p>
                    <p className="text-sm text-gray-400">AI Result</p>
                    <pre className="text-sm text-gray-200 bg-slate-900 p-2 rounded-md overflow-x-auto">{entry.assistant || "(no AI reply yet)"}</pre>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-400 mt-20">
                <p className="text-lg">No history found yet.</p>
                <p className="text-sm mt-2">Use one of the modes to save your first search.</p>
              </div>
            )}
          </>
        ) : (
          Array.isArray(chat) && chat.length > 0 ? (
            chat.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow-md ${msg.role === "user" ? "bg-indigo-500 text-white" : "bg-slate-700 text-gray-200"}`}>
                  {msg.content}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-400 mt-20">
              <p className="text-lg">Start a conversation with DevAssist AI</p>
              <p className="text-sm mt-2">Ask anything about coding, debugging, or optimization!</p>
            </div>
          )
        )}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 px-4 py-2 rounded-lg shadow-md animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <span className="text-gray-400 ml-2">DevAssist is thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="p-4 flex gap-2 bg-slate-800">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-indigo-500"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;