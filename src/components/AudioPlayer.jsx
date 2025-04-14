// src/components/AudioPlayer.jsx
import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ src, title, icon}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if ('mediaSession' in navigator && title) {
      // Set the media session metadata with title and artwork.
      navigator.mediaSession.metadata = new MediaMetadata({
        title: title,
        // Optionally add more fields:
        artist: 'Matteo Dupond 🦇 - Histoires de princesse',   // Replace with actual artist if available
        artwork: [
          {
            src: `/icon/${icon}.png`, // Path to your custom image
            // src: `/icon/logo.png`, // Path to your custom image
            sizes: '512x512',      // Ensure the image is at least 512x512
            type: 'image/png',
          },
        ],
      });
    }
  }, [title, icon]);

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
