import React, { useState } from "react";
import { Library, Plus, ArrowRight } from "lucide-react";
import PlaylistItem from "../shared/PlaylistItem";
import ArtistItem from "../shared/ArtistItem";

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
      <div className="px-4 flex items-center justify-between py-4">
        <div className="flex items-center space-x-4 text-gray-300 hover:text-white cursor-pointer">
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
          <PlaylistItem
            image_url={"https://picsum.photos/id/230/200"}
            name="Dwip"
            type="Playlist • Dwip Makwana"
            active={true}
          />
          <PlaylistItem
            image_url={"https://picsum.photos/id/240/200"}
            name="Liked Songs"
            type="Playlist • 215 songs"
          />
          <PlaylistItem
            image_url={"https://picsum.photos/id/250/200"}
            name="Daily Mix"
            type="Playlist • Spotify"
          />
          <ArtistItem
            image_url={"https://picsum.photos/id/260/200"}
            name="Sunidhi Chauhan"
            type="Artist"
          />
          <ArtistItem
            image_url={"https://picsum.photos/id/270/200"}
            name="DJ Snake"
            type="Artist"
          />
          <ArtistItem
            image_url={"https://picsum.photos/id/280/200"}
            name="Drake"
            type="Artist"
          />
          <ArtistItem
            image_url={"https://picsum.photos/id/290/200"}
            name="Shaan"
            type="Artist"
          />
          <ArtistItem
            image_url={"https://picsum.photos/id/310/200"}
            name="Benny Dayal"
            type="Artist"
          />
          <PlaylistItem
            image_url={"https://picsum.photos/id/320/200"}
            name="90s Swagger"
            type="Playlist • Spotify"
          />
          <ArtistItem
            image_url={"https://picsum.photos/id/330/200"}
            name="Udit Narayan"
            type="Artist"
          />
          <ArtistItem
            image_url={"https://picsum.photos/id/340/200"}
            name="Anu Malik"
            type="Artist"
          />
          <ArtistItem
            image_url={"https://picsum.photos/id/350/200"}
            name="Salim Merchant"
            type="Artist"
          />
          <PlaylistItem
            image_url={"https://picsum.photos/id/360/200"}
            name="80s Love Hits"
            type="Playlist • Spotify"
          />
          <PlaylistItem
            image_url={"https://picsum.photos/id/370/200"}
            name="Gaming Music"
            type="Playlist • dlfjh492fh4292feinf8"
          />
          <ArtistItem
            image_url={"https://picsum.photos/id/340/200"}
            name="Adnan Sami"
            type="Artist"
          />
          <ArtistItem
            image_url={"https://picsum.photos/id/350/200"}
            name="Jason Durelo"
            type="Artist"
          />
        </div>
      </div>
    </div>
  );
};

export default LibrarySection;