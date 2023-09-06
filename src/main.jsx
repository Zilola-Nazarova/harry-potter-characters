import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root';
import ErrorPage from "./routes/ErrorPage";
import Details from './routes/Details';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import Models from './routes/Models';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "models/:id",
        element: <Models />,
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
