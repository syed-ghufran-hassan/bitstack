import React from 'react';
import { WalletConnect } from './WalletConnect';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">BitStack</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-500 hover:text-gray-900">Home</a>
              <a href="/browse" className="text-gray-500 hover:text-gray-900">Browse Tasks</a>
              <a href="/create" className="text-gray-500 hover:text-gray-900">Create Task</a>
              <a href="/dashboard" className="text-gray-500 hover:text-gray-900">Dashboard</a>
            </nav>
            <WalletConnect />
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 BitStack. Built on Stacks.
          </p>
        </div>
      </footer>
    </div>
  );
};
