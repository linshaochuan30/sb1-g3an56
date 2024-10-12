import React from 'react';
import { NewsArticle } from '../types';

interface ArticleListProps {
  articles: NewsArticle[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <div key={article.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">{article.title}</h2>
          <p className="text-gray-600 mb-2">By {article.author} | {article.category}</p>
          <p className="text-sm text-gray-500">{new Date(article.createdAt).toLocaleDateString()}</p>
          <div className="mt-2">
            {article.tags.map((tag) => (
              <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;