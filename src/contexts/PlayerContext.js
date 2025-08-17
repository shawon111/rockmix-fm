"use client";
import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [track, setTrack] = useState({
    url: null,
    title: "",
    playing: false,
    id: null
  });

  const playTrack = (url, title, id=null) => {
    setTrack({ url, title, playing: true, id });
  };

  const togglePlay = () => {
    setTrack(prev => ({ ...prev, playing: !prev.playing }));
  };

  return (
    <PlayerContext.Provider value={{ currentTrack:track , playTrack, togglePlay }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);
