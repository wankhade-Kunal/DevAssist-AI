import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import OpenAI from "openai";
import Chat from "../models/Chat.js";

const router = express.Router();

router.post("/ask", authMiddleware, async (req, res) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { prompt } = req.body;

    const previousChats = await Chat.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .limit(10);

    // reverse to maintain correct order
    const messages = previousChats.reverse().map((chat) => ({
      role: chat.role,
      content: chat.content,
    }));

    messages.push({
      role: "user",
      content: prompt,
    });

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: messages,
    });

    const reply = response.output[0].content[0].text;

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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI request failed" });
  }
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
