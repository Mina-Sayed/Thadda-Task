import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Todo } from '../types/todo';

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'completed' | 'pending';
  setTodos: (todos: Todo[]) => void;
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  setFilter: (filter: 'all' | 'completed' | 'pending') => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      filter: 'all',
      setTodos: (todos) => set({ todos }),
      addTodo: (title) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Math.max(0, ...state.todos.map((t) => t.id)) + 1,
              title,
              completed: false,
              userId: 1,
            },
          ],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      setFilter: (filter) => set({ filter }),
    }),
    {
      name: 'todo-storage',
    }
  )
);