import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import store from './redux/store';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Details from './routes/Details';
import Home from './routes/Home';
import About from './routes/About';
import Models from './routes/Models';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'details/:id',
        element: <Details />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'models/:id',
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
);
