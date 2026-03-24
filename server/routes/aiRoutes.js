import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import OpenAI from "openai";
import Chat from "../models/Chat.js";

const router = express.Router();

router.post("/ask", authMiddleware, async (req, res) => {
  const { prompt, mode } = req.body;

  const systemPrompt = getSystemPrompt(mode);

  const previousChats = await Chat.find({ userId: req.user.id })
    .sort({ createdAt: -1 })
    .limit(10);

  // reverse to maintain correct order
  const messages = previousChats.reverse().map((chat) => ({
    role: chat.role,
    content: chat.content,
  }));

  messages.unshift({ role: "system", content: systemPrompt });
  messages.push({
    role: "user",
    content: prompt,
  });

  let reply;

  if (process.env.OPENAI_API_KEY) {
    try {
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const response = await openai.responses.create({
        model: "gpt-4.1-mini",
        input: messages,
      });

      reply = response.output[0].content[0].text;
    } catch (error) {
      console.error("OpenAI API error:", error);
      reply = getMockResponse(mode);
    }
  } else {
    console.log("No OpenAI API key, using mock response");
    reply = getMockResponse(mode);
  }

  await Chat.create({
    userId: req.user.id,
    role: "user",
    content: prompt,
  });

  await Chat.create({
    userId: req.user.id,
    role: "assistant",
    content: reply,
  });

  const totalChats = await Chat.countDocuments({ userId: req.user.id });

  if (totalChats > 20) {
    const oldChats = await Chat.find({ userId: req.user.id })
      .sort({ createdAt: 1 })
      .limit(totalChats - 20);

    const ids = oldChats.map((chat) => chat._id);

    await Chat.deleteMany({ _id: { $in: ids } });
  }

  res.json({ reply });
});

// Keep only last 20 messages in DB

// Get Chat History
router.get("/history", authMiddleware, async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.user.id }).sort({
      createdAt: 1,
    });

    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch history" });
  }
});

router.delete("/clear", authMiddleware, async (req, res) => {
  try {
    await Chat.deleteMany({ userId: req.user.id });

    res.json({ message: "Chat cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to clear chat" });
  }
});

export default router;

function getSystemPrompt(mode) {
  const prompts = {
    explain: "You are a code explainer. Explain the provided code in simple, clear terms. Break down what each part does.",
    bug: "You are a bug detector. Analyze the code for potential bugs, errors, or improvements. Provide specific suggestions.",
    readme: "You are a README generator. Create a professional README.md file based on the project description provided.",
    optimize: "You are a code optimizer. Suggest ways to improve code performance, readability, and efficiency.",
    history: "You help with chat history and conversation management.",
    stream: "You provide real-time streaming responses for faster interaction.",
    general: "You are a helpful AI assistant for coding and development tasks."
  };
  return prompts[mode] || prompts.general;
}

function getMockResponse(mode) {
  const mocks = {
    explain: "This code defines a function that takes an input and processes it. The function first checks if the input is valid, then performs the main logic, and finally returns the result. Here's a breakdown:\n\n1. Input validation\n2. Processing logic\n3. Return statement\n\nThis pattern ensures robust error handling and clear code structure.",
    bug: "After analyzing your code, I found a few potential issues:\n\n1. **Null pointer risk**: Line 15 might throw an error if 'data' is null.\n2. **Async handling**: The promise in line 22 isn't properly awaited.\n3. **Variable scope**: 'temp' variable is declared in the wrong scope.\n\nSuggestions:\n- Add null checks\n- Use async/await consistently\n- Move variable declarations appropriately",
    readme: "# Project Title\n\nA brief description of what this project does and who it's for.\n\n## Features\n\n- Feature 1\n- Feature 2\n- Feature 3\n\n## Installation\n\n```bash\nnpm install\n```\n\n## Usage\n\n```javascript\n// Example usage\n```\n\n## Contributing\n\nPull requests are welcome!",
    optimize: "Here are some optimization suggestions for your code:\n\n1. **Algorithm improvement**: Consider using a more efficient sorting algorithm (O(n log n) instead of O(n²))\n2. **Memory usage**: Reduce object creation in loops by reusing variables\n3. **Caching**: Implement memoization for expensive computations\n4. **Code splitting**: Break down large functions into smaller, focused ones\n\nThese changes could improve performance by 30-50%.",
    history: "I can help you manage your chat history. You can view previous conversations, search for specific topics, or clear old messages to keep your workspace organized.",
    stream: "Streaming responses allow for faster interaction. Your message is being processed in real-time, providing immediate feedback as I generate the response.",
    general: "I'm here to help with your coding questions! Whether you need code explanations, debugging assistance, or general development advice, feel free to ask."
  };
  return mocks[mode] || mocks.general;
}
