import React, { useState } from "react";
import { Volume2, VolumeX, PlaySquare, Maximize2 } from "lucide-react";

const VolumeControl = ({ volume, onVolumeChange }) => {
  const [isMuted, setIsMuted] = useState(false);
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

  return (
    <div className="flex items-center space-x-2 w-1/4 justify-end">
      <PlaySquare
        size={20}
        className="accent-color cursor-pointer hover:text-white hover:scale-105"
      />
      {isMuted ? (
        <VolumeX
          size={20}
          className="text-gray-400 cursor-pointer hover:text-white"
          onClick={handleMuteToggle}
        />
      ) : (
        <Volume2
          size={20}
          className="text-gray-400 cursor-pointer hover:text-white"
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
              isHovering ? 'bg-accent-color' : 'bg-white'
            }`}
            style={{ width: `${volume * 100}%` }}
          />
          {isHovering && (
            <div 
              className="absolute top-1/2 -translate-y-1/2 bg-white w-3 h-3 rounded-full shadow-lg z-10 pointer-events-none"
              style={{ 
                left: `${volume * 100}%`, 
                transform: 'translate(-50%, -50%)',
                marginLeft: '-1px' // Fine-tune positioning
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
        className="text-gray-400 cursor-pointer hover:text-white hover:scale-105"
      />
    </div>
  );
};

export default VolumeControl;