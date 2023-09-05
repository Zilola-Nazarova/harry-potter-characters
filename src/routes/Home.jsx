import MountainsList from "@/components/MountainsList";
import MainData from '@/components/MainData';

const Home = () => {
  return (
    <>
      <MainData />
      <h3>current weather on peaks</h3>
      <MountainsList />
    </>
  )
}

export default Home;
