import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl">Page Not Found</p>
      <p className="text-neutral-400 mt-2">The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
