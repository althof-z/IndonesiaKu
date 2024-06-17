import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import DestinationCard from './DestinationCard';
import PropTypes from 'prop-types';

function DestinationList({ destinations, location }) {
  // Filter destinations based on location
  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.location.toLowerCase().includes(location.toLowerCase()) ||
      destination.title.toLowerCase().includes(location.toLowerCase()),
  );

  // State to keep track of the current set of displayed destinations
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % filteredDestinations.length,
    );
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredDestinations.length) %
        filteredDestinations.length,
    );
  };

  // Get the current set of destinations to display
  const currentSet = [
    filteredDestinations[currentIndex],
    filteredDestinations[(currentIndex + 1) % filteredDestinations.length],
    filteredDestinations[(currentIndex + 2) % filteredDestinations.length],
  ].filter(Boolean);

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={handlePrevious}
          className="left px-2 py-2 mr-2 hover:bg-gray-2 transition duration-200"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="right px-2 py-2 mr-2 hover:bg-gray-2 transition duration-200"
        >
          <IoIosArrowForward />
        </button>
      </div>
      <ul className="grid md:grid-cols-3 gap-4">
        {currentSet.map((destination) => (
          <DestinationCard
            key={destination.id}
            id={destination.id}
            {...destination}
          />
        ))}
      </ul>
    </div>
  );
}

DestinationList.propTypes = {
  destinations: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
};

export default DestinationList;
