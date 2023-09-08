import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import About from '../routes/About';

describe('Test About render', () => {
  test('Test About', () => {
    const component = renderer.create(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
