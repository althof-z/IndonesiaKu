import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="flex  w-full bg-primary text-white p-4 justify-between items-center">
      <Link to="/"> 
        <h1>IndonesiaKu</h1>
      </Link>
      <div>
        <Link to="/wishlist">
          <button className="text-primary bg-white px-4 py-2 rounded-lg">wishlist</button>
        </Link>
      </div>
    </div>
  );
}
