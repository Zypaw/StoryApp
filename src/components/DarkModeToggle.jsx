// src/components/DarkModeToggle.jsx
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    // Fixed container at bottom right with a high z-index to ensure it overlays other content.
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          // When dark mode is active, show the sun icon (to allow switching to light mode)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1.5M12 19.5V21m9-9h-1.5M4.5 12H3m15.364 6.364l-1.06-1.06M6.196 6.196l-1.06-1.06M16.95 7.05l1.06-1.06M7.05 16.95l-1.06 1.06M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
            />
          </svg>
        ) : (
          // When light mode is active, show the moon icon (to allow switching to dark mode)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
