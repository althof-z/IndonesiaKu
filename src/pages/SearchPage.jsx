import { useLocation } from 'react-router-dom';
import Navigation from '../components/destination/Nav';
import useCustomHook from '../hooks/customHooks';
import SearchList from '../components/destination/SearchList';

export default function SearchPage() {
  const { data } = useCustomHook();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let query = searchParams.get('q');

  console.log(query);

  return (
    <>
      <Navigation page="wishlist">WishList</Navigation>

      {query === null || query === '' ? (
        <div className="min-h-screen flex justify-center mb-5">
          <h1 className="text-xl lg:text-2xl text-center font-semibold mt-8">
            Hasil Pencarian Tidak Ditemukan
          </h1>
        </div>
      ) : (
        <div className="">
          <div className="px-4 mt-12 container">
            <SearchList destinations={data} location={query} />
          </div>
        </div>
      )}
    </>
  );
}
