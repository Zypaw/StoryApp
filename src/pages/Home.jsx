// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from '../components/Particles';

const Home = () => {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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
    <div className="relative min-h-screen font-princess overflow-hidden">
      {/* Magical Particle Background */}
      {/* <Particles
        className="absolute inset-0 z-0"
        particleColors={['#d8a7e4', '#f5e1f7', '#ffffff']}
        particleCount={400}
        speed={0.3}
        particleSpread={8}
        particleBaseSize={100}
        alphaParticles={true}
        moveParticlesOnHover={true}
        cameraDistance={25}
      /> */}

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen bg-princess-light/70 dark:bg-princess-dark/70 backdrop-blur-md text-princess-dark dark:text-white">
        <div className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl text-center mb-6">👑 Bienvenue, Princesse ✨</h1>

          <button
            onClick={handleRandom}
            className="w-full py-3 rounded bg-purple-500 text-white font-semibold mb-6 shadow-md hover:bg-purple-600 transition"
          >
            Choisi une histoire aléatoire !
          </button>

          <div className="space-y-3">
            {stories.map(story => (
              <div
                key={story.id}
                onClick={() => navigate(`/story/${story.id}`)}
                className="p-4 border border-purple-300 rounded cursor-pointer bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white hover:shadow-md dark:hover:bg-gray-700 transition"
              >
                {story.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
