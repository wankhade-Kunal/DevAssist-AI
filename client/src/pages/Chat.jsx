import { useState, useEffect } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // Load chat history
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
          alert("Session expired. Please login again.");
          window.location.href = "/login";
        }
        return res.json();
      })
      .then((data) => {
        setChat(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        alert("Failed to load chat");
      });
  }, [token]);

  // Send message
  const sendMessage = async () => {
    if (!message.trim()) return;
    if (!token) {
      alert("Please login first");
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
        body: JSON.stringify({ prompt: message }),
      });

      if (res.status === 401) {
        localStorage.removeItem("token");
        alert("Session expired. Please login again.");
        window.location.href = "/login";
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
      
      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {Array.isArray(chat) && chat.length > 0 ? (
          chat.map((msg, index) => (
            <div
              key={index}
              className={`mb-3 ${
                msg.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <p
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-indigo-500"
                    : "bg-slate-700"
                }`}
              >
                {msg.content}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No messages yet...
          </p>
        )}

        {loading && (
          <p className="text-left text-gray-400 animate-pulse">
            DevAssist is thinking...
          </p>
        )}
      </div>

      {/* Input Box */}
      <div className="p-4 flex gap-2 bg-slate-800">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask DevAssist AI..."
          className="flex-1 p-3 rounded-lg bg-slate-700 outline-none"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-indigo-500 px-6 rounded-lg hover:bg-indigo-600 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chat;