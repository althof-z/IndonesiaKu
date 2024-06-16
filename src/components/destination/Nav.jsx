import { useState } from 'react';
import useInput from '../../hooks/useInput';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navigation({ page, children }) {
  const [showSearch, setShowSearch] = useState(false);
  const [search, onSearchChange] = useInput('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/${page}`);
  };

  const handleSearchClick = () => {
    navigate(`/search?q=${search}`);
  };

  const handleShowSearch = () => {
    if (showSearch) {
      handleSearchClick();
    }
    setShowSearch(true);
  }

  return (
    <div className="flex  w-full bg-primary text-white p-4 justify-between items-center">
      <Link to="/">
        <h1 className={`text-base md:text-[20px] font-bold md:block ${showSearch ? 'hidden' : ''}`}>IndonesiaKu</h1>
      </Link>
      <div className="flex mr-2">
        <div className="hidden  md:flex flex-row bg-white px-3 py-2 rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="mr-4 text-black"
            value={search}
            onChange={onSearchChange}
          />

          <button
            onClick={handleSearchClick}
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className={`px-4 md:hidden w-60 rounded-md text-black ${
            showSearch ? 'block' : 'hidden'
          }`}
          value={search}
          onChange={onSearchChange}
        />
        <button
          className="md:hidden text-primary bg-white ml-2 px-4 py-2 rounded-lg"
          onClick={handleShowSearch}
        >
          Search
        </button>
        <button
          className={`text-primary bg-white ml-2 px-4 md:block py-2 rounded-lg ${showSearch ? 'hidden' : ''}`}
          onClick={handleButtonClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
}


Navigation.propTypes = {
  children: PropTypes.node,
  page: PropTypes.string,
};

