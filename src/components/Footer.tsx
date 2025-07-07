import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm p-4 mt-auto">
      &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
    </footer>
  );
};

export default Footer;
