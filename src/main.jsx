import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home';
import ErrorPage from "./components/ErrorPage";
import Details from './routes/Details';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MountainsList from './components/MountainsList';
import About from './components/About';
import store from '@/redux/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "details/1",
        element: <Details />,
      },
      {
        path: "/",
        element: <MountainsList />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
