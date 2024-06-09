import React from 'react';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import "./media.scss";

const Media = ({ media }) => {
  const { title, authors, duration, cover, type } = media;

  return (
    <div className="media">
      {cover ? (
        <img src={cover} alt={title} className="media-cover" />
      ) : (
        <div className="media-icon">
          {type === 'audio' ? (
            <LibraryMusicRoundedIcon style={{ fontSize: 100 }} />
          ) : (
            <VideoLibraryRoundedIcon style={{ fontSize: 100 }} />
          )}
        </div>
      )}
      <div className="media-details">
        <h3>{title}</h3>
        <p>{authors.join(', ')}</p>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Media;
