import { useSelector } from 'react-redux';
import styles from '@/styles/MountainsList.module.css';
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from 'react-icons/bs';
import mountainsData from '@/database/mountainsData';

const MountainsList = () => {
  const { mountains, isLoading, error } = useSelector((store) => store.mountains);

  if (isLoading) {
    return <p className={styles.loading}>The forecast is loading...</p>;
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
          mountains.map((peak) => (
            <li
              key={peak.name}
              className={styles.card}
            >
              <Link to={`details/${peak.name}`}>
                  <BsArrowRightCircle className={styles.icon}/>
                  <img src={peak.image}></img>
                  <div>
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
