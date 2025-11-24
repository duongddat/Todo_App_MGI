import React from "react";

const FilterControls = ({ filter, setFilter, searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6 space-y-4">
      {/* Search Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm công việc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900 transition-all duration-200"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 bg-gray-100 dark:bg-gray-700 p-1.5 rounded-2xl">
        <button
          onClick={() => setFilter("all")}
          className={`flex-1 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
            filter === "all"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105"
              : "text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600"
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <span>📋</span>
            <span>Tất cả</span>
          </span>
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`flex-1 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
            filter === "active"
              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50 scale-105"
              : "text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600"
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <span>⏳</span>
            <span>Đang làm</span>
          </span>
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`flex-1 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
            filter === "completed"
              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50 scale-105"
              : "text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600"
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <span>✅</span>
            <span>Hoàn thành</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default FilterControls;
