import { useSelector } from 'react-redux';
import styles from '@/styles/MountainsList.module.css';
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from 'react-icons/bs';
import weatherCodes from '@/database/weatherCodes';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MountainsList = () => {
  const { mountains, isLoading, error } = useSelector((store) => store.mountains);
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredMountains = mountains.filter((peak) => {
    //if no input the return the original
    if (inputText === '') {
      return peak;
    }
    //return the item which contains the user input
    else {
      return peak.name.toLowerCase().includes(inputText)
    }
  });
  
  return (
    <>
      <div className={styles.search}>
        <h3>mountain peaks</h3>
        <input
          placeholder='search...'
          onChange={inputHandler}
        />
      </div>
      {(isLoading) && <p className="loading">The mountains list is loading...</p>}

      {(error) && (
        <p className="error">
          Something went wrong!
          <br />
          { error }
        </p>
      )}

      {(!isLoading && !error) && (
        <>
          {(filteredMountains.length === 0) && (
            <p className={styles.error}>
              Something went wrong!
              <br />
              No matching mountains found.
            </p>
          )}

          <ul className={styles.list}>
            {filteredMountains.sort((a, b) => a.name.localeCompare(b.name)).map((peak) => (
              <li
                key={uuidv4()}
                className={styles.card}
              >
                <Link to={`details/${peak.name}`}>
                  <BsArrowRightCircle className={styles.icon}/>
                  <img src={peak.image}></img>
                  <div>
                    <h4 className={styles.name}>{peak.name}</h4>
                    <span className={styles.elevation}>{peak.elevation}</span>
                    <p className={styles.code}>
                      <img alt={peak.current_weather.weathercode}src={weatherCodes[peak.current_weather.weathercode]}></img>
                      {/* <span>code {peak.current_weather.weathercode}</span> */}
                    </p>
                  </div>      
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default MountainsList;
