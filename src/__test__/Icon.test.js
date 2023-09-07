import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Icon from '../components/Icon';

describe('Test Icon render', () => {
  test('Test Icon', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Icon />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
