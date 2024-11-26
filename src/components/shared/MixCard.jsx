// src/components/shared/MixCard.jsx
import React from 'react';

const MixCard = ({ title, artists, image_url, onClick }) => {
  return (
    <div 
      className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 cursor-pointer transition-colors"
      //onClick={onClick}
    >
      <div 
        className="w-full aspect-square bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image_url})` }}
      />
      <h3 className="font-bold text-white mb-1 truncate">{title}</h3>
      <p className="text-sm text-gray-400 truncate">{artists}</p>
    </div>
  );
};

export default MixCard;