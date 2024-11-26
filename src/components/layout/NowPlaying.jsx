// src/components/layout/NowPlaying.jsx
import React, { useState } from 'react';
import PlayerControls from './PlayerControls';
import PlayerInfo from './PlayerInfo';
import VolumeControl from '../player/VolumeControl';

const NowPlaying = ({ track, isPlaying, volume, onPlayPause, onVolumeChange }) => {

  return (
    <div className="h-24 bg-black rounded-lg">
      <div className="flex items-center justify-between h-full px-4">
        <PlayerInfo track={track} />
        <PlayerControls isPlaying={isPlaying} onPlayPause={onPlayPause} />
        <VolumeControl volume={volume} onVolumeChange={onVolumeChange} />
      </div>
    </div>
  );
};

export default NowPlaying;