import { useSelector, useDispatch } from 'react-redux';
import styles from '@/styles/MountainsList.module.css';
import { Link } from "react-router-dom";

const MountainsList = () => {
  const dispatch = useDispatch();
  const { mountains, isLoading, error } = useSelector((store) => store.mountains);

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
          mountains.map((peak) => (
            <>
              <p>{peak.name}</p>
              <p>{peak.elevation}</p>
              <p>{JSON.stringify(peak.current_weather)}</p>
              <Link to={`details/${peak.name}`}>See Details -&gt;</Link>
            </>
          ))
        }
      </div>
    )
  }
}

export default MountainsList;
