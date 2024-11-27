import React, { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
} from "lucide-react";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const PlayerControls = ({
  isPlaying,
  onPlayPause,
  totalDuration = 225, // Default 3:45 (225 seconds)
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [progress, setProgress] = useState(0.33); // Example progress (1/3 of the way)
  const [isSkipBackHovering, setIsSkipBackHovering] = useState(false);
  const [isSkipForwardHovering, setIsSkipForwardHovering] = useState(false);

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    // You might want to add a prop to handle actual seeking in the parent component
  };

  // Calculate current time based on progress
  const currentTime = Math.floor(totalDuration * progress);
  const remainingTime = Math.floor(totalDuration * (1 - progress));

  return (
    <div className="flex flex-col items-center w-1/2">
      <div className="flex items-center space-x-6">
        <button className="text-zinc-400 hover:text-white hover:scale-105">
          <Shuffle size={20} />
        </button>
        <button
          className="text-zinc-400 hover:text-white hover:scale-105"
          onMouseEnter={() => setIsSkipBackHovering(true)}
          onMouseLeave={() => setIsSkipBackHovering(false)}
        >
          <SkipBack size={20} fill={isSkipBackHovering ? "white" : "#a1a1aa"} />
        </button>
        <button
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          onClick={onPlayPause}
        >
          {isPlaying ? (
            <Pause size={20} className="text-black" fill="black" />
          ) : (
            <Play size={20} className="text-black" fill="black" />
          )}
        </button>
        <button
          className="text-zinc-400 hover:text-white hover:scale-105"
          onMouseEnter={() => setIsSkipBackHovering(true)}
          onMouseLeave={() => setIsSkipBackHovering(false)}
        >
          <SkipForward
            size={20}
            fill={isSkipForwardHovering ? "white" : "#a1a1aa"}
          />
        </button>
        <button className="text-zinc-400 hover:text-white hover:scale-105">
          <Repeat size={20} />
        </button>
      </div>
      <div
        className="flex items-center space-x-2 mt-2 relative"
        style={{ width: "60%" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <span className="text-xs text-zinc-400 w-10 text-right">
          {formatTime(currentTime)}
        </span>
        <div className="flex-1 h-1 bg-zinc-800 rounded-full relative">
          <div
            className={`h-full rounded-full transition-colors duration-300 ${
              isHovering ? "bg-accent-color" : "bg-white"
            }`}
            style={{ width: `${progress * 100}%` }}
          />
          {isHovering && (
            <div
              className="absolute top-1/2 -translate-y-1/2 bg-white w-3 h-3 rounded-full shadow-lg z-10 pointer-events-none"
              style={{
                left: `${progress * 100}%`,
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
          value={progress}
          onChange={handleProgressChange}
          className="absolute inset-0 w-full h-full opacity-0 z-20"
        />
        <span className="text-xs text-zinc-400 w-10 text-left">
          {formatTime(totalDuration)}
        </span>
      </div>
    </div>
  );
};

export default PlayerControls;
