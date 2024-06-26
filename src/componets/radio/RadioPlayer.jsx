import React, { useState } from 'react';
import radios from '../../../constants/radios.json';
import './RadioPlayer.scss';

const RadioPlayer = () => {
  const [currentRadioIndex, setCurrentRadioIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleChangeStation = (index) => {
    if (index !== currentRadioIndex) {
      setCurrentRadioIndex(index);
      setIsPlaying(false);
    }
  };

  const currentRadio = radios[currentRadioIndex];

  return (
    <div className="radio-player">
      <div className="radio-info">
        <img src={currentRadio.thumbnail} alt={currentRadio.name} className="radio-thumbnail" />
        <div className="radio-details">
          <h2>{currentRadio.name}</h2>
          <p>{currentRadio.genre}</p>
          <p>{currentRadio.country}</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePlayPause} className="play-pause-button">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <div className="station-list">
        {radios.map((radio, index) => (
          <div
            key={radio.id}
            className={`station-item ${index === currentRadioIndex ? 'active' : ''}`}
            onClick={() => handleChangeStation(index)}
          >
            {radio.name}
          </div>
        ))}
      </div>
      {isPlaying && (
        <audio controls autoPlay src={currentRadio.cdnUrl}>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default RadioPlayer;
