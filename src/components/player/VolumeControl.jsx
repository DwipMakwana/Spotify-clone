import React, { useState } from "react";
import {
  Volume2,
  VolumeX,
  PlaySquare,
  Maximize2,
  AlignJustify,
  Smartphone,
} from "lucide-react";

const VolumeControl = ({ volume, onVolumeChange, onToggleNowPlaying }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayerOpen, setPlayerOpen] = useState(true);
  const [isOtherDevice, setOtherDevice] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume);
  const [isHovering, setIsHovering] = useState(false);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      onVolumeChange(prevVolume);
    } else {
      setPrevVolume(volume);
      onVolumeChange(0);
    }
  };

  const handleClose = (isVisible) => {
    onToggleNowPlaying(isVisible);

  };

  return (
    <div className="flex items-center space-x-3 w-1/4 justify-end">
      {isPlayerOpen ? (
        <div className="flex-col flex items-center space-y-0.5 hover:scale-105">
          <PlaySquare
            size={20}
            className="accent-color cursor-pointer hover:text-white"
            // onClick={handleClose(false)}
          />
          <div
            className="rounded-full bg-accent-color w-1 h-1"
            style={{ marginBottom: "-5px" }}
          />
        </div>
      ) : (
        <div className="flex-col flex items-center space-y-0.5 hover:scale-105">
          <PlaySquare
            size={20}
            className="text-zinc-400 cursor-pointer hover:text-white"
            // onClick={handleClose(true)}
          />
        </div>
      )}
      <div className="flex-col flex items-center space-y-0.5 hover:scale-105">
        <AlignJustify
          size={22}
          className="text-zinc-400 cursor-pointer hover:text-white"
          title="Queue"
        />
      </div>
      {isOtherDevice ? (
        <div className="flex-col flex items-center space-y-0.5 hover:scale-105">
          <Smartphone
            size={18}
            className="accent-color cursor-pointer hover:text-white"
            title="Queue"
          />
        </div>
      ) : (
        <div className="flex-col flex items-center space-y-0.5 hover:scale-105">
          <Smartphone
            size={18}
            className="text-zinc-400 cursor-pointer hover:text-white"
            title="Queue"
          />
        </div>
      )}

      {isMuted ? (
        <VolumeX
          size={20}
          className="text-zinc-400 cursor-pointer hover:text-white"
          onClick={handleMuteToggle}
        />
      ) : (
        <Volume2
          size={20}
          className="text-zinc-400 cursor-pointer hover:text-white"
          onClick={handleMuteToggle}
        />
      )}
      <div
        className="w-24 group relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="w-full h-1 bg-zinc-800 rounded-full relative">
          <div
            className={`h-full rounded-full transition-colors duration-300 ${
              isHovering ? "bg-accent-color" : "bg-white"
            }`}
            style={{ width: `${volume * 100}%` }}
          />
          {isHovering && (
            <div
              className="absolute top-1/2 -translate-y-1/2 bg-white w-3 h-3 rounded-full shadow-lg z-10 pointer-events-none"
              style={{
                left: `${volume * 100}%`,
                transform: "translate(-50%, -50%)",
                marginLeft: "-1px", // Fine-tune positioning
              }}
            />
          )}
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="absolute inset-0 w-full h-full opacity-0 z-20"
        />
      </div>
      <Maximize2
        size={16}
        className="text-zinc-400 cursor-pointer hover:text-white hover:scale-105"
      />
    </div>
  );
};

export default VolumeControl;
