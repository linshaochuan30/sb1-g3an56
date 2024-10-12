import React from 'react';
import ArticleForm from '../components/ArticleForm';
import { NewsArticle } from '../types';

const NewArticle: React.FC = () => {
  const handleSubmit = (article: Partial<NewsArticle>) => {
    // Here you would typically send the new article to your backend
    console.log('New article submitted:', article);
    // For now, we'll just log it to the console
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Article</h1>
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewArticle;