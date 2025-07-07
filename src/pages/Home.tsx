import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Task Manager</h2>
      <p className="mb-6">Manage your tasks and view API data efficiently.</p>
      <div className="space-x-4">
        <Link
          to="/tasks"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Tasks
        </Link>
        <Link
          to="/api-data"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          API Data
        </Link>
      </div>
    </div>
  );
};

export default Home;
