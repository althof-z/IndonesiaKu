import WishList from '../components/destination/WishList';
import Navigation from '../components/destination/Nav';
import api from '../utils/api';

export default function WishlistPage() {
  const wishlist = api.getDestinationsFromLocalStorage();

  return (
    <>
      <Navigation />
      <div className="">
        <h1 className="text-xl lg:text-2xl text-center font-semibold mt-8">
          Wishlist
        </h1>
        <div className="px-4 mt-12 container">
          <div className="flex justify-between">
            <h2 className="text-xl mb-8">wishlist anda</h2>
          </div>
          <div className="flex flex-col sm:flex-row pt-">
            <WishList wishlists={wishlist} />
          </div>
        </div>
      </div>
    </>
  );
}
