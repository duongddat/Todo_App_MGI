import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Thêm công việc mới..."
            className="w-full px-5 py-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 border-2 border-purple-200 dark:border-gray-500 rounded-2xl text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all duration-200"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Thêm</span>
          </span>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
