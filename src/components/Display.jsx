// src/components/Display.jsx
import React from 'react';

const Display = ({ expression, result }) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-t-lg mb-2 min-h-[80px]">
    <div className="text-right text-gray-600 dark:text-gray-300 text-sm">{expression || '0'}</div>
    <div className="text-right text-2xl font-bold mt-1 break-words">{result || '0'}</div>
  </div>
);

export default Display;
