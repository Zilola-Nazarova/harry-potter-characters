import styles from '@/styles/MountainsList.module.css';
import { Link } from "react-router-dom";
import mountainImage from "@/assets/mountain.png";
import peakImage from '@/assets/peak.svg';
import {BsArrowRightCircle} from 'react-icons/bs';

const MountainsList = ({data}) => {
  const { mountains, isLoading, error } = data;

  if (isLoading) {
    return <p className={styles.loading}>The forecast is loading!</p>;
  }
  if (error) {
    return (
      <p className={styles.error}>
        Something went wrong!
        <br />
        { error }
      </p>
    );
  }
  if (!isLoading) {
    return (
      <ul className={styles.list}>
        {
          data.mountains.map((peak) => (
            <li
              key={peak.name}
              className={styles.card}
            >
              <Link to={`details/${peak.name}`}>
                <div>
                  <BsArrowRightCircle />
                  <img src={mountainImage}></img>
                  <h4 className={styles.name}>{peak.name}</h4>
                  <span className={styles.elevation}>{peak.elevation}</span>
                  <p className={styles.code}>weather code {peak.current_weather.weathercode}</p>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default MountainsList;
