import Navigation from '../components/destination/Nav';
import DestinationList from '../components/DestinationList';
import useCustomHook from '../hooks/customHooks';
// import { getDestinations } from '../utils/data';

export default function DestinationPage() {
  // const destinations = getDestinations();

  const { data } = useCustomHook();

  console.log(data);

  return (
    <>
      <Navigation />
      <div className="">
        <h1 className="text-xl lg:text-2xl text-center font-semibold mt-8">
          Destination Page
        </h1>
        <div className="px-4 mt-12 container">
          <div className="flex justify-between">
            <h2 className="text-xl mb-8">Jawa Timur</h2>
            <p className="mr-3 cursor-pointer underline">view more</p>
          </div>
          <div className="flex flex-col sm:flex-row pt-">
          <DestinationList destinations={data} location="Jawa Timur" />
          </div>
        </div>
        <div className="px-4 mt-12 container">
          <div className="flex justify-between">
            <h2 className="text-xl mb-8">Jawa Barat</h2>
            <p className="mr-3 cursor-pointer underline">view more</p>
          </div>
          <div className="flex flex-col sm:flex-row pt-">
          <DestinationList destinations={data} location="Jawa Barat" />
          </div>
        </div>
        <div className="px-4 mt-12 container">
          <div className="flex justify-between">
            <h2 className="text-xl mb-8">Jawa Tengah</h2>
            <p className="mr-3 cursor-pointer underline">view more</p>
          </div>
          <div className="flex flex-col sm:flex-row pt-">
          <DestinationList destinations={data} location="Jawa Tengah" />
          </div>
        </div>
      </div>
    </>
  );
}
