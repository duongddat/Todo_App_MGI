import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [validate, setValidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    const isEmpty = value === "";

    if (isEmpty) {
      setValidate(true);
      return;
    }

    addTodo(inputValue);
    setInputValue("");
    setValidate(false);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (validate) setValidate(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInput(e)}
            placeholder="Thêm công việc mới..."
            className={`w-full px-5 py-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 border-2 border-purple-200 dark:border-gray-500 rounded-2xl text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all duration-200 ${
              validate ? "input-error" : ""
            }`}
          />
        </div>
        <button type="submit" className="btn-primary focus:ring-purple-300">
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
