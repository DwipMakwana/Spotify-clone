import React from 'react';
import { Volume2 } from 'lucide-react';

const PlaylistItem = ({ name, type, image_url, active }) => {
  return (
    <div 
      className={`space-x-2 rounded-lg flex items-center px-2 py-2 cursor-pointer ${active ? 'bg-zinc-800 text-white' : 'text-zinc-300 hover:bg-zinc-800'}`}
    >
      <img 
        src={image_url}
        alt={name}
        className="flex space-x-0 w-12 h-12 bg-zinc-800 rounded object-cover"
      />
      <div>
        <p className={`font-medium cursor-default ${active ? 'accent-color' : 'text-white'}`}>{name}</p>
        <p className={`cursor-default text-sm font-medium ${active ? 'text-zinc-400' : 'text-zinc-400'} text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]`}>{type}</p>
      </div>
      {active && (
    <div className="flex justify-end flex-1">
      <Volume2 size={16} className="accent-color mr-2" />
    </div>
  )}
  </div>
  );
};

export default PlaylistItem;