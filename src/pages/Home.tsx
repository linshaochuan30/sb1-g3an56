import React from 'react';
import { Newspaper } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <Newspaper size={64} className="mx-auto text-blue-600" />
        <h1 className="text-4xl font-bold mt-4 mb-2">Welcome to News CMS</h1>
        <p className="text-xl text-gray-600 mb-8">Manage your news content with ease</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Publish News</h2>
          <p className="text-gray-600 mb-4">Create and publish news articles quickly and efficiently.</p>
          <a href="/articles/new" className="text-blue-600 hover:underline">Create New Article &rarr;</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Manage Categories</h2>
          <p className="text-gray-600 mb-4">Organize your content with custom categories and tags.</p>
          <a href="/categories" className="text-blue-600 hover:underline">View Categories &rarr;</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <p className="text-gray-600 mb-4">Control access and permissions for your team members.</p>
          <a href="/users" className="text-blue-600 hover:underline">Manage Users &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default Home;