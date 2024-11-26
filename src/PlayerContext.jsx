import React, { createContext, useState } from 'react';

const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  return (
    <PlayerContext.Provider value={{
      track,
      isPlaying,
      volume,
      setTrack,
      setIsPlaying,
      setVolume,
    }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerProvider, PlayerContext };