import React, { useContext, useState } from "react";
import { Heart, Sparkles, CirclePlus, CircleMinus } from "lucide-react";
import "../../styles/button.css";

const PlayerInfo = ({ track }) => {
  const [isSmartShuffle, setIsSmartShuffle] = useState(false);

  return (
    <div className="flex items-center space-x-4 w-1/4 relative">
      <img
        src={track?.album?.images[0]?.url_small}
        alt={track?.name}
        className="w-14 h-14 bg-zinc-800 rounded"
      />
      <div>
        <h4 className="text-white font-medium text-sm">
          {track?.name || "No track selected"}
        </h4>
        {isSmartShuffle ? (
          <div className="flex items-center space-x-2">
            <Sparkles
              size={14}
              className="rounded-sm bg-accent-color"
              color="black"
              fill="black"
            />
            <p className="text-xs text-gray-400">
              {track?.artists[0]?.name || "Select a track"}
            </p>
          </div>
        ) : (
          <p className="text-xs text-gray-400">
            {track?.artists[0]?.name || "Select a track"}
          </p>
        )}
      </div>
      {isSmartShuffle ? (
        <div className="space-x-3">
          <button className="text-zinc-400 hover:text-white hover:scale-105">
            <CircleMinus size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white hover:scale-105">
            <CirclePlus size={20} />
          </button>
        </div>
      ) : (
        <button className="text-zinc-400 hover:text-white hover:scale-105">
          <Heart size={20} />
        </button>
      )}
    </div>
  );
};

export default PlayerInfo;
