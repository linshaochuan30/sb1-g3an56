import React from 'react';
import { Users, FileText, Settings } from 'lucide-react';

const Manage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="text-blue-500 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">User Management</h2>
          <p className="text-gray-600 mb-4">Manage user accounts and permissions.</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Total Users: 50</li>
            <li>Admins: 5</li>
            <li>Editors: 15</li>
            <li>Viewers: 30</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FileText className="text-green-500 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Content Overview</h2>
          <p className="text-gray-600 mb-4">Quick stats on your content.</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Published Articles: 78</li>
            <li>Draft Articles: 12</li>
            <li>Categories: 8</li>
            <li>Tags: 45</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Settings className="text-purple-500 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">System Settings</h2>
          <p className="text-gray-600 mb-4">Configure system-wide settings.</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Site Name</li>
            <li>Theme Options</li>
            <li>Email Notifications</li>
            <li>API Integrations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Manage;