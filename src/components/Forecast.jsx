import styles from '@/styles/ForecastDetails.module.css'
import { useSelector, useDispatch } from 'react-redux';

const Forecast = ({peak}) => {
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
  if (peak.forecast) {
    return (
      <div>
        <p>{JSON.stringify(peak.forecast)}</p>
      </div>
    )
  }
}

export default Forecast;
