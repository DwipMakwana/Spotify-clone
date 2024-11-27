// src/components/layout/NowPlaying.jsx
import React, { useState } from "react";
import PlayerControls from "./PlayerControls";
import PlayerInfo from "./PlayerInfo";
import VolumeControl from "../player/VolumeControl";
import { Volume2 } from "lucide-react";

const NowPlaying = ({
  track,
  isPlaying,
  volume,
  onPlayPause,
  onVolumeChange,
  onToggleNowPlaying,
}) => {
  const [isDevicePlaying, setIsDevicePlaying] = useState(false);
  return (
    <div>
      <div className="h-full py-2 bg-black rounded-lg">
        <div className={`flex items-center justify-between h-full px-2 mt-2 ${isDevicePlaying ? '' : 'mb-2'}`}>
          <PlayerInfo track={track} />
          <PlayerControls isPlaying={isPlaying} onPlayPause={onPlayPause} />
          <VolumeControl volume={volume} onVolumeChange={onVolumeChange} onToggleNowPlaying={onToggleNowPlaying}/>
        </div>
      </div>
      {isDevicePlaying
      ? (<div className="rounded-md bg-accent-color w-full h-6 mb-2 ">
        <div className="relative bottom-3 right-[92px] justify-end flex-col flex items-end">
          <div className="items-center flex flex-col justify-center">
            <svg width="22" height="14">
              <polygon points="11,0 22,14 0,14" fill="#03a9f4" />
            </svg>
            <div className="flex items-center justify-center space-x-1">
              <div className="border-[2px] border-black rounded-full p-0.5">
              <Volume2 size={10} fill="black" color="black"/>
              </div>
              <div className="text-black text-sm ">
                Listening on Dwip's Pixel 8
              </div>
            </div>
          </div>
        </div>
      </div>)
    : ('')}
      
    </div>
  );
};

export default NowPlaying;
