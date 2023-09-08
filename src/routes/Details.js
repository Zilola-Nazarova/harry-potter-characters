import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CharacterDetails from '../components/CharacterDetails';
import ErrorPage from './ErrorPage';

const Details = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.gpCharacters);
  const person = data.gpCharacters.find((person) => person.name === id);

  return (person) ? (
    <>
      <CharacterDetails />
    </>
  ) : <ErrorPage />;
};

export default Details;
