import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [userMedia, setUserMedia] = useState([
    // Adicione alguns dados de exemplo aqui
    {
      id: 1,
      title: 'Sample Audio',
      authors: ['Author 1'],
      duration: '3:45',
      cover: null,
      type: 'audio',
    },
    {
      id: 2,
      title: 'Sample Video',
      authors: ['Author 2'],
      duration: '10:00',
      cover: null,
      type: 'video',
    },
  ]);

  return (
    <PlayerContext.Provider value={{ userMedia, setUserMedia }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerProvider };
export default PlayerProvider;
