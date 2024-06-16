import { useParams } from 'react-router-dom';
import Navigation from '../components/destination/Nav';
import DestinationDetail from '../components/destination/DestinationDetail';

export default function DetailPage() {
  const { id } = useParams();

  return (
    <>
      <Navigation />
      <DestinationDetail id={id} />
    </>
  );
}