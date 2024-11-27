import React, { useState } from "react";
import { Heart, MoreHorizontal, Plus, Music3, Play } from "lucide-react";
import TourCard from "../shared/TourCard";
import tourEvents from "../../data/tourEventData";

const SongInfoCard = ({ track, onToggleNowPlaying }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Handle scroll events
  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollTop;
    setScrolled(scrollPosition > 0);
  };

  const handleClose = () => {
    onToggleNowPlaying(false);
  };

  return (
    <div
      className={`w-full bg-zinc-900 p-4 rounded-lg overflow-y-auto flex-1 flex-col h-full ${
        scrolled ? "bg-zinc-900" : "bg-gradient-to-b from-zinc-900 to-zinc-900 "
      }`}
    >
      <div className="flex items-center justify-between py-3 mb-2">
        <span className="text-white text-md font-bold cursor-default">
          Dwip
        </span>
        <button onClick={handleClose} className="text-zinc-400 hover:text-white hover:scale-105">
          <Plus size={22} style={{ transform: "rotate(45deg)" }} />
        </button>
      </div>

      {/* Album Art */}
      <div className="relative mb-4">
        <img
          src={track?.album?.images[0]?.url_big}
          alt={track?.name}
          className="w-full aspect-square object-cover rounded-lg"
        />
      </div>

      {/* Song Info */}
      <div className="flex flex-col mb-6">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-bold text-2xl truncate">
            {track?.name}
          </h4>
          <div className="flex items-center space-x-2">
            <button className="text-gray-400 hover:text-white hover:scale-105">
              <Heart size={20} />
            </button>
            <button className="text-gray-400 hover:text-white hover:scale-105">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
        <p className="text-m font-medium text-gray-400">
          {track?.artists?.map((artist) => artist.name).join(", ")}
        </p>
      </div>

      {/* About the Artist */}
      <div className="mb-4 bg-zinc-800 rounded-lg font-inter">
        {/* <div class="relative my-2">
          <img
            src="https://picsum.photos/id/1/400/200"
            alt="Artist"
            class="w-full h-48 rounded-t-xl object-cover"
          />
          <div class="absolute top-0 left-0 w-full p-4">
            <h5 class="text-white text-md font-bold">About the Artist</h5>
          </div>
        </div> */}
        <div className="flex flex-col items-start space-x-4">
          <div className="w-full p-4">
            <h5 className="text-white text-md font-bold">About the Artist</h5>
          </div>
          <img
            src="https://picsum.photos/id/1/200"
            alt="Artist"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="p-4 flex justify-between items-center flex-col">
          <div className="flex flex-col items-start space-x-4">
            <div>
              <h6 className="text-white font-bold my-2">A.R. Rahman</h6>
              <div className="items-center flex justify-between my-2">
                <span className="text-gray-400 text-md items-center">
                  38,113,251 monthly listeners
                </span>
                <div className="hover:scale-105">
                  <button className="text-sm bg-zinc-800 border-solid border-2 border-gray-700 hover:border-white text-white font-bold py-1 px-3 rounded-full ml-4">
                    Unfollow
                  </button>
                </div>
              </div>
              <p className="text-gray-400 text-sm line-clamp-3">
                Since Roja hit movie screens in South India in 1992, A.R. Rahman
                has redefined the country's widely popular film music. Generally
                regarded as the finest Indian film...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Credits Section */}
      <div className="mb-4 bg-zinc-800 rounded-lg font-inter p-4">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-white text-md font-bold">Credits</h5>
          <button className="text-sm font-medium text-gray-400 hover:text-white hover:underline hover:scale-105">
            Show all
          </button>
        </div>
        <div className="space-y-3 space-y-4">
          {track?.credits?.map((credit, index) => (
            <div key={index} className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white text-md font-bold">
                {credit.name}
              </span>
              <span className="text-gray-400 font-medium text-sm">
                {credit.role}
              </span>
            </div>
            <div className="hover:scale-105">
            <button className="text-sm bg-zinc-800 border-solid border-2 border-gray-700 hover:border-white text-white font-bold py-1 px-3 rounded-full ml-4">
              Follow
            </button>
          </div>
          </div>
          ))}
        </div>
      </div>

      {/* Tour Section */}
      <div className="bg-zinc-800 rounded-lg font-inter mb-4 pb-1">
        <div className="flex items-center justify-between p-4">
          <h5 className="text-white text-md font-bold">On Tour</h5>
          <button className="text-sm font-medium text-gray-400 hover:text-white hover:underline hover:scale-105">
            Show all
          </button>
        </div>
        <div>
          {tourEvents.map((event, index) => (
            <TourCard
              key={index}
              month={event.month}
              date={event.date}
              city={event.city}
              artist={event.artist}
              details={event.details}
              location={event.location}
            />
          ))}
        </div>
      </div>

      {/* Next in queue */}
      <div className="bg-zinc-800 rounded-lg font-inter p-2">
        <div className="flex items-center justify-between mb-2 p-2">
          <span className="text-white text-md font-bold">Next in queue</span>
          <button className="text-sm text-gray-400 font-medium hover:text-white hover:underline hover:scale-105">
            Open queue
          </button>
        </div>
        <div 
          className="rounded-lg flex items-center py-2 space-x-2 hover:bg-zinc-700" 
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}>
          <button 
          className="mx-2 flex space text-zinc-400 cursor-default">
            {isHovering ? (
          <Play size={16} className="text-white" fill="white" />
        ) : (
          <Music3 size={16} className="text-zinc-400" />
        )}
          </button>
          <img
            src={"https://picsum.photos/id/7/200"}
            alt={"Eastside"}
            className="flex w-12 h-12 bg-zinc-800 rounded object-cover"
          />
          <div>
            <p className="font-medium cursor-default">Senorita</p>
            <p className="cursor-default text-sm font-medium text-zinc-400 line-clamp-1">
              Farhan Akhtar, Hrithik Roshan, Abhay Deol
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongInfoCard;
