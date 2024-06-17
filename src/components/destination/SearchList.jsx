import DestinationCard from './DestinationCard';
import PropTypes from 'prop-types';

function SearchList({ destinations, location }) {
  // Filter destinasi berdasarkan lokasi
  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.location.toLowerCase().includes(location.toLowerCase()) ||
      destination.title.toLowerCase().includes(location.toLowerCase()),
  );

  console.log(filteredDestinations);

  if (filteredDestinations.length === 0) {
    return (
      <div className="min-h-screen flex justify-center">
        <h1 className="text-xl lg:text-2xl text-center font-semibold">
          Hasil Pencarian &quot;{location}&quot; Tidak Ditemukan
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-xl mb-8">Hasil Pencarian &quot;{location}&quot;</h2>
      </div>{' '}
      <div className="flex flex-col sm:flex-row pb-20">
        <ul className="grid md:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              {...destination}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

SearchList.propTypes = {
  destinations: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
};

export default SearchList;
