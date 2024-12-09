import React from 'react';

interface TodoFilterProps {
  filter: 'all' | 'completed' | 'pending';
  onFilterChange: (filter: 'all' | 'completed' | 'pending') => void;
}

export function TodoFilter({ filter, onFilterChange }: TodoFilterProps) {
  return (
    <div className="flex gap-2 mb-6">
      {(['all', 'completed', 'pending'] as const).map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          className={`px-4 py-2 rounded-lg capitalize ${
            filter === f
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}