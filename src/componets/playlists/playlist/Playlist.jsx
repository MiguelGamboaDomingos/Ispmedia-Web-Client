import React from 'react';
import "./playlist.scss"

const Playlist = ({ playlist }) => {
  const averageRating = playlist.ratings.reduce((acc, rating) => acc + rating.rating, 0) / playlist.ratings.length;

  return (
    <div className="playlist-card">
      <img src={playlist.thumbnail} alt={playlist.name} />
      <div className="playlist-info">
        <h5>{playlist.name}</h5>
        <p>{playlist.desc}</p>
        <p>
          <img src={playlist.profilePic} alt={playlist.name} />
          {playlist.userId}
        </p>
        <p>{playlist.tracks} tracks</p>
        <div className="rating">
          <span>★</span>
          <span>{averageRating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default Playlist;