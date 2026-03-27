import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Dashboard({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const actions = [
    { label: "Explain Code", mode: "explain", icon: "📘", color: "from-violet-500 to-purple-600" },
    { label: "Fix Bug", mode: "bug", icon: "🐞", color: "from-red-500 to-rose-600" },
    { label: "README Generator", mode: "readme", icon: "📄", color: "from-blue-500 to-cyan-600" },
    { label: "Optimize Code", mode: "optimize", icon: "⚡", color: "from-amber-500 to-orange-600" },
    { label: "Convert Code", mode: "convert", icon: "🔄", color: "from-teal-500 to-emerald-600" },
  ];
  const recentChats = [
    { mode: "Explain", text: "Explain JavaScript closures" },
    { mode: "Bug Fix", text: "Fix null pointer error" },
    { mode: "Optimize", text: "Optimize React re-renders" },
  ];
  const stats = {
    totalChats: 12,
    mostUsed: "Explain",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-slate-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Card */}
        <div className="mb-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/40 backdrop-blur-sm border border-orange-100 dark:border-orange-900/30 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent mb-3">
                Welcome back! 🚀
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
                Choose a tool to boost your code productivity
              </p>
            </div>

            {/* Top Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:min-w-fit">
              <button
                onClick={() => navigate("/")}
                className="px-5 py-2.5 rounded-lg font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-600 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                ← Home
              </button>

              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  navigate("/login");
                }}
                className="px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Actions Grid */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={() => navigate(`/chat?mode=${action.mode}`)}
                className={`relative group p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${action.color} text-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{action.icon}</div>
                  <p className="font-bold text-sm sm:text-base leading-tight text-shadow">
                    {action.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Your Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Total Chats Card */}
            <div className="group p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                    Total Conversations
                  </p>
                  <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
                    {stats.totalChats}
                  </p>
                </div>
                <div className="text-5xl sm:text-6xl opacity-60 group-hover:opacity-100 transition-opacity">
                  💬
                </div>
              </div>
            </div>

            {/* Most Used Mode Card */}
            <div className="group p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                    Most Used Tool
                  </p>
                  <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {stats.mostUsed}
                  </p>
                </div>
                <div className="text-5xl sm:text-6xl opacity-60 group-hover:opacity-100 transition-opacity">
                  ⭐
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {recentChats.map((chat, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-md hover:shadow-lg hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {chat.mode}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                    {chat.text}
                  </p>
                </div>

                <button
                  onClick={() =>
                    navigate(`/chat?mode=${chat.mode.toLowerCase().replace(/\s+/g, '')}`)
                  }
                  className="w-full sm:w-auto px-5 py-2 rounded-lg font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-all duration-300 transform hover:scale-105 group-hover:shadow-md whitespace-nowrap"
                >
                  Open →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;