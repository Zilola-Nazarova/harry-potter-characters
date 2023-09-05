import { useSelector } from 'react-redux';
import MountainsList from "@/components/MountainsList";
import MainData from '@/components/MainData';

const Home = () => {
  const data = useSelector((store) => store.mountains);
  
  return (
    <>
      <MainData main_data={data.mountains[0].current_weather.time}/>
      <h3>current weather on peaks</h3>
      <MountainsList 
        data={data}
      />
    </>
  )
}

export default Home;
