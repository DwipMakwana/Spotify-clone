import React from 'react';
import tourEvents from '../../data/tourEventData';

const TourEvent = ({ date, city, artist, details }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">{date}</span>
        <div>
          <p className="text-white font-bold text-lg">{city}</p>
          <p className="text-gray-400 text-sm">
            {artist}
            <br />
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};