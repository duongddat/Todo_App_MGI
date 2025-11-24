import React from "react";

const Stats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-gray-700 dark:via-purple-900 dark:to-indigo-900 rounded-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total */}
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            {total}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-medium">
            Tổng số
          </div>
        </div>

        {/* Completed */}
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
            {completed}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-medium">
            Đã xong
          </div>
        </div>

        {/* Pending */}
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {pending}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-medium">
            Chưa xong
          </div>
        </div>

        {/* Completion Rate */}
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
            {completionRate}%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-medium">
            Hoàn thành
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {total > 0 && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
