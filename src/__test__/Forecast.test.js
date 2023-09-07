import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Forecast from '../components/Forecast';

test('Check if Missions component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Forecast />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
