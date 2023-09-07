import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Root from '../routes/Root';
import mountainsData from '../database/mountainsData';

const reducer = (
  state = {
    mountains: { mountains: mountainsData, isLoading: false, error: undefined },
  },
) => state;

const store = configureStore({ reducer });

test('Check if Missions component is rendered correctly', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Root />
      </Provider>
    </MemoryRouter>,
  );

  expect(screen.getByText('about')).toBeInTheDocument();
});
