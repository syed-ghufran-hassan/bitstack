import React from 'react';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="px-4 py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to BitTask
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Decentralized microgigs marketplace built on Stacks
          </p>
          <div className="space-x-4">
            <a
              href="/browse-tasks"
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Browse Tasks
            </a>
            <a
              href="/create-task"
              className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Create Task
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Create Tasks</h3>
            <p className="text-gray-600">Post tasks with STX rewards and find skilled workers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Trustless Escrow</h3>
            <p className="text-gray-600">Funds are secured in smart contracts until work is approved</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Bitcoin Security</h3>
            <p className="text-gray-600">Built on Stacks, secured by Bitcoin's proof-of-work</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
