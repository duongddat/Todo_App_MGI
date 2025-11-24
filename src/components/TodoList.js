import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} 
          />
        ))
      ) : (
        <p className="text-center text-gray-500">Chưa có todo</p>
      )}
    </ul>
  );
};

export default TodoList;