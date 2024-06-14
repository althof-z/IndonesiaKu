import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="flex  w-full bg-primary text-white p-4 justify-between items-center">
      <Link to="/"> 
        <h1>IndonesiaKu</h1>
      </Link>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link to="/login">
              <button className="text-primary bg-white px-4 py-2 rounded-lg">
                Masuk
              </button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button className="text-primary bg-white px-4 py-2 rounded-lg">
                Daftar
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
