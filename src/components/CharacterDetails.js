import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Forecast.module.css';

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
      <h3 className={styles.peak_name}>
        {person.name}
      </h3>
      <div className={styles.forecast}>
        <img alt="Character portrait" src={person.image} />
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{person.name}</td>
            </tr>
            <tr>
              <td>Other names:</td>
              <td>{person.alternative_names}</td>
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
                {person.yearOfBirth}
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
              <td>{Object.keys(person.wand).map((prop) => prop)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CharacterDetails;
