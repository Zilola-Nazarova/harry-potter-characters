import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Gfs from '../components/Gfs';

describe('Test Gfs render', () => {
  test('Test Gfs', () => {
    const tree = render(
      <BrowserRouter>
        <Gfs />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
