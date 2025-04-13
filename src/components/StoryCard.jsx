// src/components/StoryCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StoryCard = ({ id, title, snippet }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/story/${id}`)}
      className="cursor-pointer border rounded p-4 mb-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      {/* Display the title with an emoji if available */}
      <h2 className="text-xl font-bold">{title}</h2>
      {/* Optionally display a short snippet of the story */}
      {snippet && <p className="mt-2 text-gray-600 dark:text-gray-300">{snippet}</p>}
    </div>
  );
};

export default StoryCard;
