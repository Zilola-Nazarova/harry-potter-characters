import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import configureStore from 'redux-mock-store';
import MountainsList from '../components/MountainsList';
import mountainsData from '../database/mountainsData';

test('Check if Missions component is rendered correctly', () => {
  const applyMiddleware = [thunk, logger];
  const mockingStore = configureStore(applyMiddleware);
  const store = mockingStore({
    mountains: mountainsData,
    isLoading: false,
    error: false,
  });

  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <MountainsList />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
