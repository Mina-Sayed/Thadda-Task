import React, { useEffect } from 'react';
import { ClipboardList } from 'lucide-react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { useTodoStore } from './store/todoStore';
import { getTodos } from './services/api';

function App() {
  const {
    todos,
    filter,
    setTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
  } = useTodoStore();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const initialTodos = await getTodos();
        setTodos(initialTodos);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };

    if (todos.length === 0) {
      fetchTodos();
    }
  }, [setTodos, todos.length]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <ClipboardList size={32} className="text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-800">Todo List</h1>
        </div>

        <TodoInput onAdd={addTodo} />
        <TodoFilter filter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;