import React, { useEffect, useRef, useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import CircularProgress from '@mui/material/CircularProgress';
import './radio.scss';

const Radio = ({ radio }) => {
  const { currentMedia, mediaType, playMedia, audioRef } = usePlayer();
  const localAudioRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localAudioRef.current = new Audio(radio.cdnUrl);

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    localAudioRef.current.addEventListener('canplay', handleCanPlay);
    localAudioRef.current.addEventListener('waiting', handleWaiting);

    return () => {
      localAudioRef.current.removeEventListener('canplay', handleCanPlay);
      localAudioRef.current.removeEventListener('waiting', handleWaiting);
    };
  }, [radio]);

  useEffect(() => {
    if (currentMedia && currentMedia.id === radio.id && mediaType === 'audio') {
      if (audioRef.current && audioRef.current !== localAudioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = localAudioRef.current;
      localAudioRef.current.play().catch(error => console.log(error));
    } else {
      if (localAudioRef.current) {
        localAudioRef.current.pause();
      }
    }
  }, [currentMedia, mediaType, radio]);

  const handlePlayPause = () => {
    if (currentMedia && currentMedia.id === radio.id && mediaType === 'audio') {
      if (localAudioRef.current.paused) {
        setIsLoading(true);
        localAudioRef.current.play().catch(error => console.log(error));
      } else {
        localAudioRef.current.pause();
      }
    } else {
      playMedia(radio, 'audio');
    }
  };

  return (
    <div className="radio">
      <img src={radio.thumbnail} alt={radio.name} />
      <h2>{radio.name}</h2>
      <p>{radio.genre} - {radio.country}</p>
      <button className="play-pause-button" onClick={handlePlayPause}>
        {isLoading ? (
          <CircularProgress size={24} />
        ) : currentMedia && currentMedia.id === radio.id && mediaType === 'audio' && localAudioRef.current && !localAudioRef.current.paused ? (
          <PauseIcon fontSize="large" />
        ) : (
          <PlayArrowIcon fontSize="large" />
        )}
      </button>
    </div>
  );
};

export default Radio;
