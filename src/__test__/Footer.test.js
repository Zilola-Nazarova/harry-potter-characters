import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

describe('Test Footer render', () => {
  test('Test Footer', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
