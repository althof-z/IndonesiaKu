import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function DestinationCard({ id, title, body, imageLink }) {
  return (
    <div className="w-[250] mr-3 mb-3 px-6 py-10 rounded-lg h-[330] bg-white shadow-lg">
      <img className="rounded-lg mb-4" src={imageLink} alt="" />
      <div>
        <h1 className="text-xl font-semibold pt-">{title}</h1>
        <p className="mb-5">{body}</p>
        <Link to={`/detail/${id}`}>
          <button className="bg-primary text-white px-5 py-3 rounded-lg">
            read more
          </button>
        </Link>
      </div>
    </div>
  );
}

DestinationCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
};
