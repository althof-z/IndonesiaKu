import { Link } from 'react-router-dom';

export default function DestinationCard() {
  return (
    <div className="w-[250] mr-3 mb-3 px-6 py-10 rounded-lg h-[330] bg-white shadow-lg">
      <img
        className="rounded-lg mb-4"
        src="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kb25lc2lhfGVufDB8fDB8fHww"
        alt=""
      />
      <div>
        <h1 className="text-xl font-semibold pt-">Lorem, ipsum.</h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, ut!
        </p>
        <Link to="/detail">
          <button className="bg-primary text-white px-5 py-3 rounded-lg">
            readmore
          </button>
        </Link>
      </div>
    </div>
  );
}
