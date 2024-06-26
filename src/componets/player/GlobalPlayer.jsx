// GlobalPlayer.jsx
import React from 'react';
import { usePlayer } from './PlayerContext';

const GlobalPlayer = () => {
  const { currentMedia, mediaType, audioRef, videoRef } = usePlayer();

  if (!currentMedia) {
    return null;
  }

  return (
    <div className="global-player">
      <h2>Reproduzindo: {currentMedia.name}</h2>
      {mediaType === "audio" && (
        <audio ref={audioRef} src={currentMedia.cdnUrl} controls autoPlay />
      )}
      {mediaType === "video" && (
        <video ref={videoRef} src={currentMedia.cdnUrl} controls autoPlay />
      )}
    </div>
  );
};

export default GlobalPlayer;
