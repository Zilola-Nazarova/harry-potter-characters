import { useState } from 'react';
import styles from '@/styles/Forecast.module.css';
import cld from '@/assets/weather/cld.svg';
import rn from '@/assets/weather/rn.svg';
import tmp from '@/assets/weather/tmp.svg';
import wng from '@/assets/weather/wng.svg';

const Forecast = ({peak_name, forecast, data}) => {
  const { isLoading, error } = data;
  const [model, setModel] = useState("icon");

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
      <>
        <h3>{peak_name} forecast</h3>
        <div className={styles.forecast}>
          <div className={styles.model}>
            <button
              type='button'
              onClick={() => setModel("icon")}
              className={(model === "icon") ? styles.selected : null}
            >
              ICON
            </button>
            <button
              type='button'
              onClick={() => setModel("gfs")}
              className={model === "gfs" ? styles.selected : null}
            >
              GFS
            </button>
          </div>
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
                {forecast[model]['temperature'].map((data) => (
                  <td>{data}</td>
                ))}
              </tr>
              <tr key="perc">
                <th><img src={wng} /></th>
                {forecast[model]['precipitation'].map((data) => (
                  <td>{data}</td>
                ))}
              </tr>
              <tr key="wind">
                <th><img src={rn} /></th>
                {forecast[model]['windspeed'].map((data) => (
                  <td>{data}</td>
                ))}
              </tr>
              <tr key="cloud">
                <th><img src={cld} /></th>
                {forecast[model]['cloudcover'].map((data) => (
                  <td>{data}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </>    
    )
  }
}

export default Forecast;
