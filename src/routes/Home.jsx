import { useSelector } from 'react-redux';
import MountainsList from "@/components/MountainsList";

const Home = () => {
  const data = useSelector((store) => store.mountains);
  
  return (
    <>
      <p>This is Mountains List</p>
      <MountainsList 
        data={data}
      />
    </>
  )
}

export default Home;
