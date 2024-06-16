import Navigation from '../components/destination/Nav';
import DestinationList from '../components/DestinationList';
import useCustomHook from '../hooks/customHooks';
// import { getDestinations } from '../utils/data';

export default function DestinationPage() {
  // const destinations = getDestinations();

  const { data } = useCustomHook();

  return (
    <>
      <Navigation page = {'wishlist'}>wishlist</Navigation>
      <div className="">
        <h1 className="text-xl lg:text-2xl text-center font-semibold mt-8">
          Destination Page
        </h1>
        <div className="px-4 mt-12 container">
          <div className="flex justify-between">
            <h2 className="text-xl mb-8">Jawa Timur</h2>
          </div>
            <DestinationList destinations={data} location="jawa timur" />
        </div>
        <div className="px-4 mt-12 container">
          <div className="flex justify-between">
            <h2 className="text-xl mb-8">Jawa Barat</h2>
          </div>
            <DestinationList destinations={data} location="jawa barat" />
        </div>
        <div className="px-4 mt-12 container">
          <div className="flex justify-between">
            <h2 className="text-xl mb-8">Jawa Tengah</h2>
          </div>
            <DestinationList destinations={data} location="Jawa Tengah" />
        </div>
      </div>
    </>
  );
}
