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
    <form onSubmit={handleSubmit} className="mb-5 sm:mb-6">
      <div className="flex gap-2 sm:gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInput(e)}
            placeholder="Thêm công việc..."
            className={`input ${
              validate ? "input-error" : ""
            } placeholder-gray-400`}
          />
        </div>
        <button type="submit" className="btn-primary">
          <span className="flex items-center gap-1.5 sm:gap-2">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
            <span className="hidden md:inline">Thêm</span>
          </span>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
