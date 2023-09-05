import Forecast from "@/components/Forecast";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import MainData from '@/components/MainData';

const Details = () => {
  const data = useSelector((state) => state.mountains);
  const { id } = useParams();
  const peak = data.mountains.find((peak) => peak.name === id);
  return (
    <>
      {/* <p>{JSON.stringify(peak)}</p> */}
      <MainData main_data={peak.current_weather}/>
      <Forecast
        peak_name={peak.name}
        forecast={peak.forecast}
        data={data}
      />
    </>
  )
}

export default Details;
