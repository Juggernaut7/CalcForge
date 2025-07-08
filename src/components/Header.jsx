// src/components/Header.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ title }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Header;
