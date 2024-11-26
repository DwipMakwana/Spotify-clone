import React from "react";
import { Home, Search, Library, Plus } from "lucide-react";
import PlaylistItem from "../shared/PlaylistItem";

const Sidebar = () => {
  return (
    <div className="p-4">
      <nav className="space-y-6">
        {/* Navigation items */}
        <div className="p-1 space-y-4">
          <a className="space-x-2 flex items-center py-1 text-white hover:text-white cursor-pointer">
            <Home size={24} fill="white"/>
            <span className="font-bold">Home</span>
          </a>
          <a className="space-x-2 flex items-center py-1 text-gray-300 hover:text-white cursor-pointer">
            <Search size={24} />
            <span className="font-bold">Search</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;