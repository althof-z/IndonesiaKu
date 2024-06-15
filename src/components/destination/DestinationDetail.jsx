import React from 'react';
import useCustomHook from '../../hooks/customHooks';
import { useParams } from 'react-router-dom';
import api from '../../utils/api.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function DestinationDetail() {
  const { id } = useParams();
  const { data } = useCustomHook();
  const navigate = useNavigate();
  const destination = data.find((dest) => dest.id === id);

  const isInWishlist = api.isDestinationInLocalStorage(id);

  const handleAddToWishlist = () => {
    try {
      if (isInWishlist) {
        api.removeDestinationFromLocalStorage(destination.id);
      } else {
        api.saveDestinationToLocalStorage(destination);
      }

      toast.success(
        isInWishlist
          ? `${destination.title} dihapus dari wishlist`
          : `${destination.title} masuk ke wishlist`,
      );
      navigate('/wishlist');
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!destination) {
    return (
      <div className="container pt-20 flex flex-col justify-around sm:flex-row">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Destination Tidak Ditemukan
        </h1>
      </div>
    );
  }

  return (
    <div className="container pt-20 flex flex-col justify-around sm:flex-row">
      <img
        className="rounded-lg h-[500px] lg:h-[700px]  w-[500px] object-cover mb-3"
        src={destination.imageLink}
        alt={destination.title}
      />
      <div className="sm:px-10 h-full">
        <h1 className="text-2xl sm:text-3xl font-bold">{destination.title}</h1>
        <p>{destination.location}</p>
        <div className="flex flex-row gap-3 flex-wrap">
          {destination.imageLinks &&
            destination.imageLinks.map((link, index) => (
              <img
                key={index}
                className="rounded-lg h-[70px] w-[70px] sm:h-[120px] sm:w-[120px] object-cover mb-3"
                src={link}
                alt={`${destination.title} ${index + 1}`}
              />
            ))}
        </div>
        <div className="border-t-2 border-b-2 py-5">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p>{destination.body}</p>
        </div>
        <div className="border-t-2 border-b-2 py-5">
          <h2 className="text-xl font-semibold">Location</h2>
          <p>{destination.location}</p>
          <a
            href={destination.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <div className="mb-5">
          <button
            onClick={handleAddToWishlist}
            className="bg-primary text-white w-full  px-5 py-3 rounded-lg"
          >
            {isInWishlist ? 'Hapus dari Wishlist' : 'Tambahkan Ke Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;
