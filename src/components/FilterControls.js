import React from "react";

const FilterControls = ({ filter, setFilter, searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6 space-y-4">
      {/* Search Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5"
            style={{ color: "var(--text-tertiary)" }}
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
          className="input-search focus:ring-purple-100 dark:focus:ring-purple-900 placeholder-gray-400"
        />
      </div>

      {/* Filter Buttons */}
      <div
        className="flex gap-2 p-1.5 rounded-2xl"
        style={{ background: "var(--filter-bg)" }}
      >
        <button
          onClick={() => setFilter("all")}
          className={`filter-btn ${
            filter === "all" ? "filter-btn-active-all" : ""
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <span>📋</span>
            <span>Tất cả</span>
          </span>
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`filter-btn ${
            filter === "active" ? "filter-btn-active" : ""
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <span>⏳</span>
            <span>Đang làm</span>
          </span>
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`filter-btn ${
            filter === "completed" ? "filter-btn-active-completed" : ""
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
