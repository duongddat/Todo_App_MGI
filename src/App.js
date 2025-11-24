import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterControls from "./components/FilterControls";
import Stats from "./components/Stats";

const getLocalStorageTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

function App() {
  const [todos, setTodos] = useState(getLocalStorageTodos);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    if (title.trim() === "") return;
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "active") return !todo.completed;
      return true;
    })
    .filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 text-[15px]">
      <div className="w-full max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-90 transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-3xl">
          {/* Header with Theme Toggle */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Todo App
              </h1>
            </div>
          </div>

          {/* Filter and Search Controls */}
          <FilterControls
            filter={filter}
            setFilter={setFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          {/* Add Todo Form */}
          <TodoForm addTodo={addTodo} />

          {/* Todo List */}
          <TodoList
            todos={filteredTodos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />

          {/* Statistics */}
          <Stats todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
