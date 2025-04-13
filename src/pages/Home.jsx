// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the stories metadata from the generated JSON file
    fetch('/stories.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch stories metadata');
        }
        return response.json();
      })
      .then(data => setStories(data))
      .catch(error => console.error("Error fetching stories:", error));
  }, []);

  const handleRandom = () => {
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    navigate(`/story/${randomStory.id}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <button
        onClick={handleRandom}
        className="w-full py-3 rounded bg-green-500 text-white mb-6"
      >
        Choisi une histoire aléatoire !
      </button>
      {/* Optional: A list of stories */}
      <div>
        {stories.map(story => (
          <div
            key={story.id}
            onClick={() => navigate(`/story/${story.id}`)}
            className="p-4 border rounded mb-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {story.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
