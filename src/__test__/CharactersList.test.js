import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CharactersList from '../components/CharactersList';

const mock = [
  {
    id: '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8',
    name: 'Harry Potter',
    alternate_names: ['The Boy Who Lived', 'The Chosen One'],
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    wizard: true,
    ancestry: 'half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
    patronus: 'stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    alternate_actors: [],
    alive: true,
    image: 'https://ik.imagekit.io/hpapi/harry.jpg',
  },
  {
    id: '4c7e6819-a91a-45b2-a454-f931e4a7cce3',
    name: 'Hermione Granger',
    alternate_names: [],
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
    dateOfBirth: '19-09-1979',
    yearOfBirth: 1979,
    wizard: true,
    ancestry: 'muggleborn',
    eyeColour: 'brown',
    hairColour: 'brown',
    wand: {
      wood: 'vine',
      core: 'dragon heartstring',
      length: 10.75,
    },
    patronus: 'otter',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Emma Watson',
    alternate_actors: [],
    alive: true,
    image: 'https://ik.imagekit.io/hpapi/hermione.jpeg',
  },
];
const reducer = (
  state = {
    gpCharacters: { gpCharacters: mock, isLoading: false, error: undefined },
  },
) => state;

const store = configureStore({ reducer });

test('Check if the Root component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <MemoryRouter>
        <CharactersList />
      </MemoryRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
  expect(screen.getByText('Hermione Granger')).toBeInTheDocument();
});
