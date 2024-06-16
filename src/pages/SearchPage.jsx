import { useLocation } from 'react-router-dom';
import Navigation from '../components/destination/Nav';
import DestinationList from '../components/DestinationList';
import useCustomHook from '../hooks/customHooks';

export default function SearchPage() {
  const { data } = useCustomHook();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let query = searchParams.get('q');

  console.log(query);

  if (query === null || query === '') {
    return (
      <>
        <Navigation />
        <div className="">
          <h1 className="text-xl lg:text-2xl text-center font-semibold mt-8">
            Hasil Pencarian Tidak Ditemukan
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="">
        <div className="px-4 mt-12 container">
          <div className="flex justify-between">
            <h2 className="text-xl mb-8">
              Hasil Pencarian &quot;{query}&quot;
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row pt-">
            <DestinationList destinations={data} location={query} />
          </div>
        </div>
      </div>
    </>
  );
}
