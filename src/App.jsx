// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Story from './pages/Story';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
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
}

export default App;
