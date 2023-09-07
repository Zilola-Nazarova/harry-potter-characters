import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from '../styles/CharactersList.module.css';

const CharactersList = () => {
  const { gpCharacters, isLoading, error } = useSelector((store) => store.gpCharacters);
  const [inputText, setInputText] = useState('');
  const filtered = gpCharacters.filter((person) => person.name.toLowerCase().includes(inputText));
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className={styles.home}>
      <div className={styles.search}>
        <h1>Harry Potter Characters</h1>
        <input
          placeholder="search..."
          onChange={inputHandler}
        />
      </div>
      {(isLoading) && <p className="loading">The list of characters is loading...</p>}

      {(error) && (
        <p className="error">
          Something went wrong!
          <br />
          { error }
        </p>
      )}

      {(filtered) && (
        <>
          {(filtered.length === 0) && (
            <p className="error">
              Something went wrong!
              <br />
              No characters found.
            </p>
          )}
          <ul className={styles.list}>
            {filtered.map((person) => (
              <li
                key={uuidv4()}
                className={styles.card}
              >
                <Link to={`details/${person.name}`}>
                  <BsArrowRightCircle className={styles.icon} />
                  <div className={styles.portrait}>
                    {(person.image)
                      ? <img alt="Character portrait" src={person.image} />
                      : <p>no image available</p>}
                  </div>
                  <div className={styles.info}>
                    <h2 className={styles.name}>{person.name}</h2>
                    <h3 className={styles.house}>{person.house}</h3>
                    <p className={styles.alive}>{(JSON.stringify(person.alive)) ? 'alive' : 'not alive'}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CharactersList;
