import React from "react";
import DestinationCard from "./destination/DestinationCard";

function DestinationList({ destinations, location }) {
  // Filter destinasi berdasarkan lokasi
  const filteredDestinations = destinations.filter(
    (destination) => destination.location === location
  );

  return (
    <ul>
      {filteredDestinations.map((destination) => (
        <DestinationCard key={destination.id} id={destination.id} {...destination} />
      ))}
    </ul>
  );
}

export default DestinationList;
