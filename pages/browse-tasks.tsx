import React from 'react';
import { Layout } from '../components/Layout';
import { TaskList } from '../components/TaskList';

export default function BrowseTasks() {
  return (
    <Layout>
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Browse Tasks</h1>
        <TaskList />
      </div>
    </Layout>
  );
}
