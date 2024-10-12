import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import { NewsArticle } from '../types';

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const mockArticles: NewsArticle[] = [
      // ... (保持现有的模拟文章数据不变)
    ];
    setArticles(mockArticles);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Latest News Articles</h1>
        <Link to="/articles/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create New Article
        </Link>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Articles;