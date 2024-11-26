import React, { useContext } from 'react';
import { Heart } from 'lucide-react';
import '../../styles/button.css';


const PlayerInfo = ({ track }) => {
  return (
    <div className="flex items-center space-x-4 w-1/4 relative">
      <img 
        src={track?.album?.images[0]?.url_small} 
        alt={track?.name} 
        className="w-14 h-14 bg-zinc-800 rounded"
      />
      <div>
        <h4 className="text-white font-medium">
          {track?.name || 'No track selected'}
        </h4>
        <p className="text-sm text-gray-400">
          {track?.artists[0]?.name || 'Select a track'}
        </p>
      </div>
      <button 
      className="text-zinc-400 hover:text-white hover:scale-105">
            <Heart size={20} />
      </button>
    </div>
  );
};

export default PlayerInfo;