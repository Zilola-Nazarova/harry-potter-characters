import styles from '@/styles/MountainsList.module.css';
import { Link } from "react-router-dom";

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
  if (mountains.length !== 0) {
    return (
      <div>
        {
          data.mountains.map((peak) => (
            <li key={peak.name}>
              <p>{peak.name}</p>
              <p>{peak.elevation}</p>
              <p>{JSON.stringify(peak.current_weather)}</p>
              <Link to={`details/${peak.name}`}>See Details -&gt;</Link>
            </li>
          ))
        }
      </div>
    )
  }
}

export default MountainsList;
