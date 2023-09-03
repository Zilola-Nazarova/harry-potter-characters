import MountainsList from "@/components/MountainsList";
import Header from '@/components/Header'
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default Home;
