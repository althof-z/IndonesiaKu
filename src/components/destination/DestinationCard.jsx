import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

export default function DestinationCard({ id, title, body, imageLink }) {
  const truncatedBody = truncateText(body, 150);

  return (
    <div className="flex-shrink-0 w-64 mr-3 mb-3 rounded-lg bg-white shadow-lg overflow-hidden">
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <img className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg" src={imageLink} alt="" />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="mb-2">{truncatedBody}</p>
        <Link to={`/detail/${id}`}>
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Read more
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
