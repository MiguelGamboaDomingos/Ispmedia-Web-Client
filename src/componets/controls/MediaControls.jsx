import React, { useState, useRef, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import './mediaControls.scss';

const MediaControls = ({ src, type }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Volume range from 0 to 1
  const mediaRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      mediaRef.current.pause();
    } else {
      mediaRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const volumeValue = event.target.value;
    mediaRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  return (
    <div className="media-controls">
      <div className="controls">
        <button onClick={togglePlay}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <div className="volume-control">
          {volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
      {type === "audio" ? (
        <audio ref={mediaRef} src={src} />
      ) : (
        <video ref={mediaRef} src={src} />
      )}
    </div>
  );
};

export default MediaControls;
