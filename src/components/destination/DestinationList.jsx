import DestinationCard from './DestinationCard';
import PropTypes from 'prop-types';

function DestinationList({ destinations, location }) {
  // Filter destinasi berdasarkan lokasi
  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.location.toLowerCase().includes(location.toLowerCase()) ||
      destination.title.toLowerCase().includes(location.toLowerCase()),
  );

  console.log(filteredDestinations);

  return (
    <ul className='grid md:grid-cols-3'>
      {filteredDestinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          id={destination.id}
          {...destination}
        />
      ))}
    </ul>
  );
}

DestinationList.propTypes = {
  destinations: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
};

export default DestinationList;
