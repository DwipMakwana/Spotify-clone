// src/components/SpotifyClone.jsx
import React, { useState } from "react";
import tracks from "../data/tracks";
import Sidebar from "./layout/Sidebar";
import MainView from "./layout/MainView";
import NowPlaying from "./layout/NowPlaying";
import LibrarySection from "./layout/LibrarySection";
import SongInfoCard from "./layout/SongInfoCard";
import { Ellipsis } from "lucide-react";

const SpotifyClone = () => {
  // Global state for the player
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isNowPlayingVisible, setIsNowPlayingVisible] = useState(true);

  // Player control functions
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const handleTrackChange = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handleToggleNowPlaying = (isVisible) => {
    console.log(isVisible);
    setIsNowPlayingVisible(isVisible);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-black text-white px-2">
      <div className="h-8 bg-black rounded-xl m-2 flex items-center">
        <Ellipsis size={28} />
      </div>
      <div className="flex flex-1 overflow-hidden gap-2">
        <div className="w-[350px] flex flex-col gap-2">
          <div className="bg-zinc-900 rounded-xl">
            <Sidebar />
          </div>
          <div className=" bg-zinc-900 rounded-xl flex-1 overflow-hidden">
            <LibrarySection />
          </div>
        </div>
        <div className="bg-zinc-900 rounded-xl flex-1">
          <MainView onTrackSelect={handleTrackChange} tracks={tracks} />
        </div>
        {isNowPlayingVisible && (
          <div className="w-[400px] bg-zinc-900 rounded-xl">
            <SongInfoCard
              track={currentTrack}
              onToggleNowPlaying={handleToggleNowPlaying}
            />
          </div>
        )}
      </div>
      <div className="h-22 bg-black rounded-xl">
        <NowPlaying
          track={currentTrack}
          isPlaying={isPlaying}
          volume={volume}
          onPlayPause={handlePlayPause}
          onVolumeChange={handleVolumeChange}
          onToggleNowPlaying={handleToggleNowPlaying}
        />
      </div>
    </div>
  );
};

export default SpotifyClone;
