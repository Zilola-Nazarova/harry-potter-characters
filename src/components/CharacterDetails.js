import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import styles from '../styles/CharacterDetails.module.css';

const CharacterDetails = () => {
  const { id } = useParams();
  const { isLoading, error, gpCharacters } = useSelector((state) => state.gpCharacters);
  const person = gpCharacters.find((peak) => peak.name === id);

  if (isLoading) {
    return <p className="loading">The forecast is loading!</p>;
  }
  if (error) {
    return (
      <p className="error">
        Something went wrong!
        <br />
        { error }
      </p>
    );
  }
  return (person) && (
    <>
      <h1 className={styles.title}>Harry Potter Characters</h1>
      <div className={styles.details}>
        <img alt="Character portrait" src={person.image} />
        <table>
          <thead>
            <tr className={styles.first_row}>
              <td>Name:</td>
              <td>{person.name}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Other names:</td>
              <td>
                {person.alternate_names.map((i) => i)}
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{person.gender}</td>
            </tr>
            <tr>
              <td>House:</td>
              <td>{person.house}</td>
            </tr>
            <tr>
              <td>Date of birth:</td>
              <td>
                {person.dateOfBirth}
              </td>
            </tr>
            <tr>
              <td>Ancestry:</td>
              <td>{person.ancestry}</td>
            </tr>
            <tr>
              <td>Patronus:</td>
              <td>{person.patronus}</td>
            </tr>
            <tr>
              <td>Ancestry:</td>
              <td>{person.ancestry}</td>
            </tr>
            <tr>
              <td>Wand:</td>
              <td>
                {Object.keys(person.wand).map((prop) => (
                  <>
                    {prop}
                    {': '}
                    {person.wand[prop]}
                    <br />
                  </>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CharacterDetails;
