import React from 'react';
import { Newspaper } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Newspaper size={24} />
          <h1 className="text-2xl font-bold">News CMS</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/articles" className="hover:underline">Articles</a></li>
            <li><a href="/categories" className="hover:underline">Categories</a></li>
            <li><a href="/manage" className="hover:underline">Manage</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;