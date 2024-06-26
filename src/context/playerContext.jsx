import React, { createContext, useState, useContext, useRef } from 'react';

const PlayerContext = createContext();

export const usePlayer = () => {
  return useContext(PlayerContext);
};

export const PlayerProvider = ({ children }) => {
  const [currentMedia, setCurrentMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null); // Pode ser "audio", "video", etc.
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const playMedia = (media, type) => {
    if (currentMedia && currentMedia.id !== media.id) {
      pauseCurrentMedia(); // Pausa o media atual se estiver reproduzindo outro
    }
    setCurrentMedia(media);
    setMediaType(type);
    setIsPlaying(true); // Inicia a reprodução
  };

  const pauseMedia = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false); // Pausa a reprodução
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseMedia();
    } else {
      playCurrentMedia();
    }
  };

  const playCurrentMedia = () => {
    if (currentMedia) {
      if (mediaType === 'audio' && audioRef.current) {
        audioRef.current.play();
      }
      if (mediaType === 'video' && videoRef.current) {
        videoRef.current.play();
      }
      setIsPlaying(true);
    }
  };

  const seekMedia = (time) => {
    if (mediaType === 'audio' && audioRef.current) {
      audioRef.current.currentTime = time;
    }
    if (mediaType === 'video' && videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const getCurrentTime = () => {
    if (mediaType === 'audio' && audioRef.current) {
      return audioRef.current.currentTime;
    }
    if (mediaType === 'video' && videoRef.current) {
      return videoRef.current.currentTime;
    }
    return 0;
  };

  const getTotalDuration = () => {
    if (mediaType === 'audio' && audioRef.current) {
      return audioRef.current.duration;
    }
    if (mediaType === 'video' && videoRef.current) {
      return videoRef.current.duration;
    }
    return 0;
  };

  const pauseCurrentMedia = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentMedia,
        mediaType,
        isPlaying,
        playMedia,
        pauseMedia,
        togglePlayPause,
        seekMedia,
        getCurrentTime,
        getTotalDuration,
        audioRef,
        videoRef,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
