import useInput from '../../hooks/useInput';
import { Link, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [search, onSearchChange] = useInput('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/wishlist');
  };

  const handleSearchClick = () => {
    navigate(`/search?q=${search}`);
  };

  return (
    <div className="flex  w-full bg-primary text-white p-4 justify-between items-center">
      <Link to="/">
        <h1>IndonesiaKu</h1>
      </Link>
      <Link to="/destination">
        <p>Destinasi Wisata</p>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="mr-4 text-black"
          value={search}
          onChange={onSearchChange}
        />
        <button
          onClick={handleSearchClick}
          className="text-primary bg-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
        <button
          className="text-primary bg-white px-4 py-2 rounded-lg"
          onClick={handleButtonClick}
        >
          WishList
        </button>
      </div>
    </div>
  );
}
