import Header from '@/components/Header'
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentWeather } from "@/redux/mountains/mountainsSlice";
import { useEffect } from 'react';
import mountainsData from '@/database/mountainsData';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    mountainsData.forEach(
      (peak) => dispatch(getCurrentWeather(peak))
    );
  }, [dispatch]);

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
