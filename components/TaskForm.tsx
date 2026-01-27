import React, { useState } from 'react';

interface TaskFormProps {
  onSubmit: (data: {
    title: string;
    description: string;
    amount: number;
    deadline: number;
    priority: number;
    category: number;
  }) => void;
  loading?: boolean;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amount: '',
    deadline: '',
    priority: 1,
    category: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: formData.title,
      description: formData.description,
      amount: parseFloat(formData.amount) * 1000000, // Convert to micro-STX
      deadline: parseInt(formData.deadline),
      priority: formData.priority,
      category: formData.category,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border rounded px-3 py-2"
          required
          maxLength={50}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full border rounded px-3 py-2"
          rows={3}
          required
          maxLength={256}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Amount (STX)</label>
        <input
          type="number"
          step="0.000001"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="w-full border rounded px-3 py-2"
          required
          min="0"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Deadline (Block Height)</label>
        <input
          type="number"
          value={formData.deadline}
          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Priority</label>
        <select
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: parseInt(e.target.value) })}
          className="w-full border rounded px-3 py-2"
        >
          <option value={0}>Low</option>
          <option value={1}>Normal</option>
          <option value={2}>High</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: parseInt(e.target.value) })}
          className="w-full border rounded px-3 py-2"
        >
          <option value={0}>Design</option>
          <option value={1}>Development</option>
          <option value={2}>Marketing</option>
          <option value={3}>Writing</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Creating...' : 'Create Task'}
      </button>
    </form>
  );
};
