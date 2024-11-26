import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for songs, artists, or playlists"
        className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search 
        size={20} 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
      />
    </div>
  );
};

export default SearchBar;