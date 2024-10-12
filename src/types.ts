export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  status: 'draft' | 'pending' | 'published';
}

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'editor' | 'viewer';
}