# 🚀 DevAssist AI

![GitHub repo size](https://img.shields.io/github/repo-size/wankhade-Kunal/DevAssist-AI)
![GitHub stars](https://img.shields.io/github/stars/wankhade-Kunal/DevAssist-AI?style=social)
![GitHub forks](https://img.shields.io/github/forks/wankhade-Kunal/DevAssist-AI?style=social)
![License](https://img.shields.io/badge/license-MIT-green)


# 🚀 DevAssist AI

DevAssist AI is a modern AI-powered developer assistant that helps you **understand, debug, optimize, and convert code** using an interactive chat interface.

Built as a full-stack project with a clean SaaS-style UI, it provides multiple tools for developers in one place.

---

## ✨ Features

* 💬 **AI Chat System**

  * Mode-based interaction:

    * Code Explanation
    * Bug Fixing
    * Code Optimization
    * Code Conversion
    * README Generator

* 🧠 **Smart Dashboard**

  * Quick access to tools
  * Recent activity (history)
  * Usage stats

* 🔐 **Authentication System**

  * Login / Signup
  * Persistent session using localStorage

* 🌗 **Dark / Light Mode**

  * Toggle theme with smooth transitions

* ⚡ **Modern UI**

  * Clean SaaS-style design
  * Responsive layout
  * Tailwind CSS v4 styling

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS v4
* React Router

### Backend

* Node.js
* Express

### State Management

* React Hooks (useState, useEffect)
* Context API

---

## 📁 Project Structure

```
DevAssist-AI/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Footer.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Chat.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── LearnMore.jsx
│   │   │   ├── Dashboard.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│
├── server/
│   ├── server.js
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/wankhade-Kunal/devassist-ai.git
cd devassist-ai
```

---

### 2. Install dependencies

#### Frontend

```bash
cd client
npm install
npm run dev
```

#### Backend

```bash
cd server
npm install
node server.js
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server folder:

```env
OPENAI_API_KEY=your_api_key_here
```

---

## 💡 Usage

* Open the app in your browser
* Login or Signup
* Choose a feature from Dashboard or Home
* Start chatting with AI based on selected mode

---

## 📸 Screenshots (Optional)

* Home Page ![image alt](https://github.com/wankhade-Kunal/DevAssist-AI/blob/034ced6ba88c4068c71ca60368fc9ce4d42b5485/Images/Screenshot%202026-03-27%20152714.png)
* Home Page + Day and Night Mode ![image alt](https://github.com/wankhade-Kunal/DevAssist-AI/blob/65190a52eb9b05d59070ac5c714369def4dad7ab/Images/Screenshot%202026-03-27%20152740.png)

---

## 🎯 Future Improvements

* Save chat history per user (database)
* Add user profile
* Improve AI response formatting
* Deploy to production (Vercel + Render)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgements

* OpenAI API
* Tailwind CSS
* React Ecosystem

---

## 💼 Author

* Kunal Wankhade
* GitHub: https://github.com/wankhade-Kunal
* LinkedIn: https://www.linkedin.com/in/kwankhade/

---

⭐ If you like this project, give it a star!
