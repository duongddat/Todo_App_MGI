import React, { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 300);
  };

  return (
    <li
      className={`group flex items-center gap-2 p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
        isDeleting ? "opacity-0 scale-95" : "opacity-100 scale-100"
      } ${todo.completed ? "opacity-70" : ""}`}
    >
      {/* Custom Checkbox */}
      <div className="relative flex-shrink-0">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="peer sr-only"
          id={`todo-${todo.id}`}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className="flex items-center justify-center w-6 h-6 border-2 border-gray-300 dark:border-gray-500 rounded-lg cursor-pointer transition-all duration-200 peer-checked:bg-gradient-to-r peer-checked:from-green-500 peer-checked:to-emerald-500 peer-checked:border-transparent hover:border-purple-500 dark:hover:border-purple-400"
        >
          {todo.completed && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </label>
      </div>

      {/* Todo Text */}
      <span
        className={`flex-1 text-lg cursor-pointer transition-all duration-200 ${
          todo.completed
            ? "line-through text-gray-400 dark:text-gray-500"
            : "text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400"
        }`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.title}
      </span>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="flex-shrink-0 p-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-300"
        aria-label="Xóa"
      >
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
