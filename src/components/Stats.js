import React from "react";

const Stats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="stats-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total */}
        <div className="text-center">
          <div className="stat-number stat-number-total">{total}</div>
          <div className="stat-label">Tổng số</div>
        </div>

        {/* Completed */}
        <div className="text-center">
          <div className="stat-number stat-number-completed">{completed}</div>
          <div className="stat-label">Đã xong</div>
        </div>

        {/* Pending */}
        <div className="text-center">
          <div className="stat-number stat-number-pending">{pending}</div>
          <div className="stat-label">Chưa xong</div>
        </div>

        {/* Completion Rate */}
        <div className="text-center">
          <div className="stat-number stat-number-rate">{completionRate}%</div>
          <div className="stat-label">Hoàn thành</div>
        </div>
      </div>

      {/* Progress Bar */}
      {total > 0 && (
        <div className="mt-4">
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
