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
      className={`todo-item ${
        isDeleting
          ? "opacity-0 scale-95 animate-slideOutRight"
          : "opacity-100 scale-100 animate-fadeInUp"
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
          className={`todo-checkbox ${
            todo.completed ? "todo-checkbox-checked" : ""
          } hover:border-purple-500 dark:hover:border-purple-400`}
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
        className={`todo-text ${
          todo.completed
            ? "todo-text-completed"
            : "group-hover:text-purple-600 dark:group-hover:text-purple-400"
        }`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.title}
      </span>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="btn-delete opacity-0 group-hover:opacity-100 focus:opacity-100 focus:ring-red-300"
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
