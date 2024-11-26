import React from "react";
import tourEvents from "../../data/tourEventData";

const TourCard = ({ month, date, city, artist, details, location }) => {
  return (
    <div className="m-2 hover:bg-zinc-700 cursor-pointer rounded-lg">
      <div className="px-2 flex items-center justify-between">
        <div className="bg-zinc-900 w-12 h-12 flex flex-col items-center justify-center rounded">
          <span className="text-xs text-white font-medium">{month}</span>
          <span className="text-white font-extrabold text-xl">{date}</span>
        </div>
        <div className="justify-start flex-1 ml-4">
          <p className="text-white font-medium text-md">{city}</p>
          <p className="text-white font-medium text-sm">{artist}</p>
          <p className="text-zinc-400 font-bold text-sm line-clamp-1">{details} • {location}</p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
