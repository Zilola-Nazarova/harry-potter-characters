import Header from '@/components/Header'
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getWeather } from "@/redux/mountains/mountainsSlice";
import { useEffect } from 'react';
import mountainsData from '@/database/mountainsData';
import Footer from '@/components/Footer';

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    mountainsData.forEach(
      (peak) => dispatch(getWeather(peak))
    );
  }, [dispatch]);

  return (
    <>
      <Header />
      <div id="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Root;
