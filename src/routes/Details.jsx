import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import MainData from '../components/MainData';
import Forecast from '../components/Forecast';

const Details = () => {
  const data = useSelector((state) => state.mountains);
  const { id } = useParams();
  const peak = data.mountains.find((peak) => peak.name === id);

  return (
    <>
      <MainData mainData={peak.current_weather} />
      <Forecast
        peakName={peak.name}
        forecast={peak.forecast}
        data={data}
      />
    </>
  );
};

export default Details;
