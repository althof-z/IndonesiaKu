import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (location.pathname === '/wishlist') {
      navigate('/destination');
    } else {
      navigate('/wishlist');
    }
  };

  return (
    <div className="flex  w-full bg-primary text-white p-4 justify-between items-center">
      <Link to="/"> 
        <h1>IndonesiaKu</h1>
      </Link>
      <div>
        <button className="text-primary bg-white px-4 py-2 rounded-lg" onClick={handleButtonClick}>{location.pathname === '/wishlist'? "Destination" : "WishList"}</button>
      </div>
    </div>
  );
}