import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div className="mb-5 sm:mb-6">
      {todos.length > 0 ? (
        <ul className="space-y-2 sm:space-y-2.5">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      ) : (
        <p
          className="text-center font-bold"
          style={{ color: "var(--text-secondary)" }}
        >
          Chưa có todo
        </p>
      )}
    </div>
  );
};

export default TodoList;
