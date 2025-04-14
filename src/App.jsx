// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Story from './pages/Story';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  // Use state to track if the user is authenticated.
  const [authenticated, setAuthenticated] = useState(false);

  // Set the correct password to a date string.
  // For example, using "2025-04-04" as the password (format: YYYY-MM-DD)
  const correctPassword = '2024-07-14';

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // For an input of type "date", the value will be in "YYYY-MM-DD" format.
    const enteredPassword = e.target.elements.password.value;
    if (enteredPassword === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password, please try again.');
      e.target.reset();
    }
  };

  // If not authenticated, display a full-screen password form.
  // if (!authenticated) {
  //   return (
  //     <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
  //       <form
  //         onSubmit={handlePasswordSubmit}
  //         className="flex flex-col gap-4 p-8 border rounded-lg shadow-lg bg-white dark:bg-gray-800"
  //       >
  //         <h2 className="text-2xl font-bold text-center">Enter Date Password</h2>
  //         <input
  //           type="date"
  //           name="password"
  //           className="px-4 py-2 border rounded focus:outline-none"
  //           required
  //         />
  //         <button
  //           type="submit"
  //           className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
  //         >
  //           Unlock
  //         </button>
  //       </form>
  //     </div>
  //   );
  // }

  // Render the app normally if authenticated.
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <header className="p-4 flex justify-end">
          <DarkModeToggle />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story/:storyId" element={<Story />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
