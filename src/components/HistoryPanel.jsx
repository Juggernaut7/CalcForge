// src/components/HistoryPanel.jsx
import React from 'react';

const HistoryPanel = ({ history }) => {
  if (!history.length) return null;

  return (
    <div className="mt-4 p-2 bg-gray-50 dark:bg-gray-700 rounded-b-lg max-h-40 overflow-auto">
      <h3 className="text-sm font-semibold mb-2">History</h3>
      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
        {history.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPanel;
