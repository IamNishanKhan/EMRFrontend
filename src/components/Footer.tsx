import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md py-4 mt-auto">
      <div className="container mx-auto px-6">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} North South University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}