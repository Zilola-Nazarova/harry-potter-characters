import { useEffect } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getWeather } from '../redux/mountains/mountainsSlice';
import mountainsData from '../database/mountainsData';
import ErrorPage from './ErrorPage';
import Details from './Details';
import Home from './Home';
import About from './About';
import Models from './Models';
import Layout from './Layout';

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    mountainsData.forEach(
      (peak) => dispatch(getWeather(peak)),
    );
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="models/:id" element={<Models />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;
