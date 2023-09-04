import styles from '@/styles/Forecast.module.css'

const Forecast = ({peak, data}) => {
  const { isLoading, error } = data;

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
