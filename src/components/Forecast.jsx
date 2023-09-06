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
        <h3 className={styles.peak_name}>{peak_name} forecast</h3>
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
                <th>mm-dd</th>
                {forecast.intervals.map((time, i) => (
                  <td key={i}>{time.substring(5, 10)}</td>  
                ))}
              </tr>
              <tr key="time">
                <th>time</th>
                <th>hh:mm</th>
                {forecast.intervals.map((day, i) => (
                  <td key={i}>{day.substring(day.length - 5)}</td>  
                ))}
              </tr>
              <tr key="temp">
                <th><img src={tmp} /></th>
                <th>°C</th>
                {forecast[model]['temperature'].map((data, i) => (
                  <td key={i}>{data}</td>
                ))}
              </tr>
              <tr key="prec">
                <th><img src={rn} /></th>
                <th>mm</th>
                {forecast[model]['precipitation'].map((data, i) => (
                  <td key={i}>{data}</td>
                ))}
              </tr>
              <tr key="wind">
                <th><img src={wng} /></th>
                <th>km/h</th>
                {forecast[model]['windspeed'].map((data, i) => (
                  <td key={i}>{data}</td>
                ))}
              </tr>
              <tr key="cloud">
                <th><img src={cld} /></th>
                <th>%</th>
                {forecast[model]['cloudcover'].map((data, i) => (
                  <td key={i}>{data}</td>
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
