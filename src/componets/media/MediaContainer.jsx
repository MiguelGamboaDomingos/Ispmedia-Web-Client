import "./mediaContainer.scss";
import React from 'react';
import Media from './Media';

const MediaContainer = ({ userMedia }) => {
  return (
    <div className="media-container">
      {userMedia.map(media => (
        <Media key={media.id} media={media} />
      ))}
    </div>
  );
};

export default MediaContainer;
