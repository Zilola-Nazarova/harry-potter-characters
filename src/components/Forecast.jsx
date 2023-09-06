import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/Forecast.module.css';
import cld from '@/assets/weather/cld.svg';
import rn from '@/assets/weather/rn.svg';
import tmp from '@/assets/weather/tmp.svg';
import wng from '@/assets/weather/wng.svg';

const Forecast = ({ peakName, forecast, data }) => {
  const { isLoading, error } = data;
  const [model, setModel] = useState('icon');

  if (isLoading) {
    return <p className="loading">The forecast is loading!</p>;
  }
  if (error) {
    return (
      <p className="error">
        Something went wrong!
        <br />
        { error }
      </p>
    );
  }
  return (
    <>
      <h3 className={styles.peak_name}>
        {peakName}
        forecast
      </h3>
      <div className={styles.forecast}>
        <div className={styles.model}>
          <button
            type="button"
            onClick={() => setModel('icon')}
            className={(model === 'icon') ? styles.selected : null}
          >
            ICON
          </button>
          <button
            type="button"
            onClick={() => setModel('gfs')}
            className={model === 'gfs' ? styles.selected : null}
          >
            GFS
          </button>
        </div>
        <table>
          <tbody>
            <tr key="day">
              <th>day</th>
              <th>mm-dd</th>
              {forecast.intervals.map((time) => (
                <td key={uuidv4()}>{time.substring(5, 10)}</td>
              ))}
            </tr>
            <tr key="time">
              <th>time</th>
              <th>hh:mm</th>
              {forecast.intervals.map((day) => (
                <td key={uuidv4()}>{day.substring(day.length - 5)}</td>
              ))}
            </tr>
            <tr key="temp">
              <th><img alt="Temperature icon" src={tmp} /></th>
              <th>°C</th>
              {forecast[model].temperature.map((data) => (
                <td key={uuidv4()}>{data}</td>
              ))}
            </tr>
            <tr key="prec">
              <th><img alt="Rain icon" src={rn} /></th>
              <th>mm</th>
              {forecast[model].precipitation.map((data) => (
                <td key={uuidv4()}>{data}</td>
              ))}
            </tr>
            <tr key="wind">
              <th><img alt="Wind icon" src={wng} /></th>
              <th>km/h</th>
              {forecast[model].windspeed.map((data) => (
                <td key={uuidv4()}>{data}</td>
              ))}
            </tr>
            <tr key="cloud">
              <th><img alt="Cloud icon" src={cld} /></th>
              <th>%</th>
              {forecast[model].cloudcover.map((data) => (
                <td key={uuidv4()}>{data}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Forecast;
