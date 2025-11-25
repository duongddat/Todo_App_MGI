import React from "react";

const FilterControls = ({ filter, setFilter, searchTerm, setSearchTerm }) => {
  return (
    <div className="space-y-3 mb-5 sm:mb-6">
      {/* Search Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
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
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-search focus:ring-purple-100 dark:focus:ring-purple-900 placeholder-gray-400"
        />
      </div>

      {/* Filter Buttons */}
      <div
        className="flex gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl"
        style={{ background: "var(--filter-bg)" }}
      >
        <button
          onClick={() => setFilter("all")}
          className={`filter-btn ${
            filter === "all" ? "filter-btn-active-all" : ""
          }`}
        >
          <span className="flex items-center justify-center gap-1 sm:gap-2">
            <span className="text-sm sm:text-base">📋</span>
            <span className="inline max-sm:text-[10px]">Tất cả</span>
          </span>
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`filter-btn ${
            filter === "active" ? "filter-btn-active" : ""
          }`}
        >
          <span className="flex items-center justify-center gap-1 sm:gap-2">
            <span className="text-sm sm:text-base">⏳</span>
            <span className="inline max-sm:text-[10px]">Đang làm</span>
          </span>
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`filter-btn ${
            filter === "completed" ? "filter-btn-active-completed" : ""
          }`}
        >
          <span className="flex items-center justify-center gap-1 sm:gap-2">
            <span className="text-sm sm:text-base">✅</span>
            <span className="inline max-sm:text-[9px]">Hoàn thành</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default FilterControls;
