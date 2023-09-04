import Forecast from "@/components/Forecast";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const Details = () => {
  const data = useSelector((state) => state.mountains);
  const { id } = useParams();
  const peak = data.mountains.find((peak) => peak.name === id);
  
  return (
    <>
      <p>This is forecast</p>
      <Forecast 
        peak={peak}
        data={data}
      />
    </>
  )
}

export default Details;
