import styles from '@/styles/Forecast.module.css';
import cld from '@/assets/weather/cld.svg';
import rn from '@/assets/weather/rn.svg';
import tmp from '@/assets/weather/tmp.svg';
import wng from '@/assets/weather/wng.svg';

const Forecast = ({forecast, data}) => {
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
  if (forecast) {
    return (
      <div className={styles.forecast}>
        <table>
          <tbody>
            <tr key="day">
              <th>day</th>
              {forecast.intervals.map((time) => (
                <td>{time.substring(0, 10)}</td>  
              ))}
            </tr>
            <tr key="time">
              <th>time</th>
              {forecast.intervals.map((day) => (
                <td>{day.substring(day.length - 5)}</td>  
              ))}
            </tr>
            <tr key="temp">
              <th><img src={tmp} /></th>
              {forecast.icon['temperature'].map((data) => (
                <td>{data}</td>
              ))}
            </tr>
            <tr key="perc">
              <th><img src={wng} /></th>
              {forecast.icon['precipitation'].map((data) => (
                <td>{data}</td>
              ))}
            </tr>
            <tr key="wind">
              <th><img src={rn} /></th>
              {forecast.icon['windspeed'].map((data) => (
                <td>{data}</td>
              ))}
            </tr>
            <tr key="cloud">
              <th><img src={cld} /></th>
              {forecast.icon['cloudcover'].map((data) => (
                <td>{data}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>     
    )
  }
}

export default Forecast;
