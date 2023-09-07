import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MainData from '../components/MainData';
import Forecast from '../components/Forecast';
import ErrorPage from './ErrorPage';

const Details = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.mountains);
  const peak = data.mountains.find((peak) => peak.name === id);

  return (peak) ? (
    <>
      <MainData />
      <Forecast />
    </>
  ) : <ErrorPage />;
};

export default Details;
