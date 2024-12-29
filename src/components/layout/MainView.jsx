import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Bell, Users, User } from "lucide-react";
import profileImage from "../../assets/profile.png";
import playlists from "../../data/playlists";
import toprecom from "../../data/toprecom";

const MainView = ({ onTrackSelect }) => {
  const [scrolled, setScrolled] = useState(false);
  const [gridColumns, setGridColumns] = useState(2);

  // Handle scroll events
  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollTop;
    setScrolled(scrollPosition > 0);
  };

  // Dynamic grid column calculation
  useEffect(() => {
    const calculateGridColumns = () => {
      const containerWidth =
        document.querySelector(".grid-container")?.clientWidth ||
        window.innerWidth;

      // Top mixes grid logic
      const columnWidth = 180; // Approximate width of each grid item
      const availableColumns = Math.floor(containerWidth / columnWidth);

      setGridColumns(Math.max(2, availableColumns)); // Limit columns
    };

    // Calculate on mount and resize
    calculateGridColumns();
    window.addEventListener("resize", calculateGridColumns);

    // Cleanup listener
    return () => window.removeEventListener("resize", calculateGridColumns);
  }, []);

  return (
    <div
      className={`rounded-xl flex-1 flex flex-col h-full relative ${
        scrolled
          ? "bg-zinc-900"
          : "bg-gradient-to-b from-red-950 to-zinc-900 bg-[length:100%_50%] bg-no-repeat"
      }`}
    >
      {/* Fixed Header */}
      <div
        className={`rounded-t-xl sticky top-0 z-10 px-4 py-4 flex justify-between items-center transition-colors duration-300
          ${scrolled
            ? "bg-red-950 transition-opacity duration-300"
            : ""
          }`
        }
      >
        <div className="w-16 flex items-center">
          <div className="flex justify-start space-x-2">
            <div className="flex justify-center items-center p-2 bg-zinc-900 rounded-full w-8 h-8 hover:scale-105 cursor-pointer">
              <ChevronLeft size={18} className="hover:text-white text-zinc-400 hover:scale-105" />
            </div>
            <div className="flex justify-center items-center p-2 bg-zinc-900 rounded-full w-8 h-8 hover:scale-105 cursor-pointer">
              <ChevronRight size={18} className="hover:text-white text-zinc-400 hover:scale-105" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative flex justify-center items-center p-2 bg-zinc-900 rounded-full w-8 h-8 hover:scale-105 cursor-pointer">
            <Bell size={18} className="hover:text-white text-zinc-400 hover:scale-105"/>
            <div className="w-2 h-2 rounded-full bg-blue-500 absolute flex top-1 right-1"/>
          </div>
          <div className="flex justify-center items-center p-2 bg-zinc-900 rounded-full w-8 h-8 hover:scale-105 cursor-pointer">
            <Users size={18} className="hover:text-white text-zinc-400 hover:scale-105"/>
          </div>
          <button className="flex p-1 rounded-full bg-zinc-900 hover:scale-105 w-8 h-8">
            <img src={profileImage} alt="Profile Image" className="w-full" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-8" onScroll={handleScroll}>
        <div className="px-6 py-2 space-y-8">
          {/* Greeting Section */}
          <h1 className="text-3xl font-bold text-white">Good afternoon</h1>

          {/* Recent Playlists Grid */}
          <div
            className={`grid ${
              window.innerWidth > 2000
                ? "grid-cols-4"
                : window.innerWidth > 1600
                ? "grid-cols-3"
                : "grid-cols-2"
            } gap-2 grid-container`}
          >
            {toprecom.map((playlist) => (
              <button
                key={playlist.id}
                className=" flex items-center bg-zinc-700/50 hover:bg-zinc-600/50 rounded-md overflow-hidden"
                onClick={() => onTrackSelect(playlist)}
              >
                <img
                  src={playlist.image_url}
                  alt={playlist.title}
                  className="h-full w-1/7 object-cover"
                />
                <span className="px-4 font-semibold text-white truncate">
                  {playlist.title}
                </span>
              </button>
            ))}
          </div>

          {/* Top Mixes Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Your top mixes</h2>
            </div>
            <div
              className={`grid grid-cols-${gridColumns} gap-4 grid-container`}
              style={{
                gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
              }}
            >
              {playlists.map((mix) => (
                <div
                  key={mix.id}
                  className="bg-zinc-800/40 p-4 rounded-lg hover:bg-zinc-700/40 cursor-pointer transition-colors group"
                  onClick={() => onTrackSelect(mix)}
                >
                  <div className="relative mb-4">
                    <img
                      src={mix.image_url}
                      alt={mix.title}
                      className="w-full aspect-square object-cover rounded-md"
                    />
                  </div>
                  <h3 className="font-bold text-white mb-1 truncate">
                    {mix.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {mix.artists}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainView;
