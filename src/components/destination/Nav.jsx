import { useState } from 'react';
import useInput from '../../hooks/useInput';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

export default function Navigation({ page, children }) {
  const [showSearch, setShowSearch] = useState(false);
  const [search, onSearchChange] = useInput('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/${page}`);
  };

  const handleSearchClick = () => {
    if (search === '') {
      toast.error('Isi kolom pencarian');
      return;
    }
    navigate(`/search?q=${search}`);
  };

  const handleShowSearch = () => {
    if (showSearch) {
      handleSearchClick();
    }
    setShowSearch(true);
  };

  return (
    <div className="flex w-full bg-primary text-white p-4 justify-between items-center">
      <Link to="/destination" className="flex items-center">
        <img src="/img/logo.png" alt="Logo" className="w-5 h-5 px-2" />
        <h1
          className={`text-base md:text-[20px] font-bold md:block ${
            showSearch ? 'hidden' : ''
          }`}
        >
          IndonesiaKu
        </h1>
      </Link>
      <div className="flex mr-2">
        <div className="hidden md:flex flex-row bg-white px-3 py-2 rounded-md">
          <input
            type="text"
            placeholder="Cari Provinsi atau Destinasi..."
            className="px-2 mr-4 text-black"
            value={search}
            onChange={onSearchChange}
          />
          <button
            onClick={handleSearchClick}
            className="bg-primary text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaSearch className="mr-2" />
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
          <FaSearch />
        </button>
        <button
          className={`text-primary bg-white ml-2 px-4 md:block py-2 rounded-lg ${
            showSearch ? 'hidden' : ''
          }`}
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
