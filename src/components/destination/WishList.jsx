import DestinationCard from './DestinationCard';
import PropTypes from 'prop-types';

function WishList({ wishlists }) {
  return (
    <ul className="grid md:grid-cols-3">
      {wishlists.map((wishlist) => (
        <DestinationCard key={wishlist.id} id={wishlist.id} {...wishlist} />
      ))}
    </ul>
  );
}

WishList.PropsTypes = {
  wishlists: PropTypes.array.isRequired,
};

export default WishList;
