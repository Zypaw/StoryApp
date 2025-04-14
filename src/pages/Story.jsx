// src/pages/Story.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import frontMatter from 'front-matter';
import AudioPlayer from '../components/AudioPlayer';


const Story = () => {
  const { storyId } = useParams(); // Gets the story ID from the route (e.g., story1)
  const [metadata, setMetadata] = useState({});
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Construct the file path based on the story id.
    // Note: Ensure your markdown files are located in public/stories/
    const filePath = `/stories/${storyId}.md`;
    console.log("Fetching file from:", filePath);

    fetch(filePath)
      .then((response) => {
        console.log("Response received:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        // Parse the text using front-matter
        const parsed = frontMatter(text);
        console.log("Parsed front matter:", parsed);
        setMetadata(parsed.attributes);
        setContent(parsed.body);
      })
      .catch((error) => {
        console.error("Error loading markdown:", error);
        setContent("Sorry, this story could not be loaded.");
      });
  }, [storyId]);

  return (

    <div className="max-w-2xl mx-auto p-4">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 border rounded bg-purple-500 text-white hover:bg-purple-600 transition-colors"
      >
        Retour aux Histoires
      </button>
      {/* Display the title with emoji (if provided in the front-matter) */}
      <h1 className="text-3xl font-bold mb-4">{metadata.title}</h1>
      {/* Render the markdown content */}
      <div className="prose dark:prose-dark mb-4">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      {/* If an audio file is specified, render the audio player */}
      {metadata.audio && <AudioPlayer src={metadata.audio} title={metadata.title} icon={storyId}/>}
    </div>
  );
};

export default Story;
