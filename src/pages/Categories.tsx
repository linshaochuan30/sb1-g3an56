import React from 'react';
import { Tag } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  articleCount: number;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    { id: '1', name: 'Technology', articleCount: 15 },
    { id: '2', name: 'Politics', articleCount: 8 },
    { id: '3', name: 'Science', articleCount: 12 },
    { id: '4', name: 'Economy', articleCount: 10 },
    { id: '5', name: 'Environment', articleCount: 7 },
    { id: '6', name: 'Health', articleCount: 9 },
    { id: '7', name: 'Entertainment', articleCount: 6 },
    { id: '8', name: 'Sports', articleCount: 11 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded shadow flex items-center">
            <Tag className="text-blue-500 mr-3" />
            <div>
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="text-gray-600">{category.articleCount} articles</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;