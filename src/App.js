import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterControls from "./components/FilterControls";
import Stats from "./components/Stats";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

const getLocalStorageTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const getLocalStorageTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "light";
};

function App() {
  const [todos, setTodos] = useState(getLocalStorageTodos);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState(getLocalStorageTheme);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
    <div className="todo-app">
      <div className="w-full max-w-2xl">
        <div className="todo-card">
          {/* Header with Theme Toggle */}
          <div className="todo-header">
            <div className="todo-header-left">
              <div className="todo-logo">
                <span className="text-2xl">✨</span>
              </div>
              <h1 className="todo-title">Todo App</h1>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
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
