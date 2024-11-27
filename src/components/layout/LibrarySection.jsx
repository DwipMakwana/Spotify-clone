import React, { useState } from "react";
import { Library, Plus, ArrowRight } from "lucide-react";
import PlaylistItem from "../shared/PlaylistItem";
import library from "../../data/library";

const LibrarySection = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollTop;
    setScrolled(scrollPosition > 0);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Library section header */}
      <div className="px-5 flex items-center justify-between py-4">
        <div className="flex items-center space-x-4 text-zinc-400 hover:text-white cursor-pointer">
          <Library size={24} />
          <span className="font-bold">Your Library</span>
        </div>
        {/* <div className="flex space-x-4">
          <Plus
            size={20}
            className="text-zinc-300 hover:text-white cursor-pointer"
          />
          <ArrowRight
            size={20}
            className="text-zinc-300 hover:text-white cursor-pointer"
          />
        </div> */}
      </div>
      {/* Scrollable content area */}
      <div
        className="flex-1 overflow-y-auto px-2 custom-scrollbar relative"
        onScroll={handleScroll}
      >
        <div className="mb-2">
          {library.map((playlistItem) => (
            <PlaylistItem
              key={playlistItem.id}
              image_url={playlistItem.image_url}
              name={playlistItem.label}
              type={playlistItem.type}
              active={playlistItem.active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibrarySection;
