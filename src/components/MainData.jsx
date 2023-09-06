import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import uz from '../assets/uz-03.svg';
import mountainsData from '@/database/mountainsData.js';
import styles from '@/styles/MainData.module.css';

const MainData = ({ mainData }) => {
  const { id } = useParams();
  // const data = useSelector((state) => state.mountains);
  // const peak = data.mountains.find((peak) => peak.name === id);
  // const forecast = peak.forecast;
  const time = useSelector((store) => store.mountains.mountains[0].time);
  const date = useSelector((store) => store.mountains.mountains[0].date);

  return (
    <div className={styles.country}>
      <img alt="Uzbekistan map outline" src={uz} />
      {
        (!id)
          ? (
            <div className={styles.homepage_text}>
              <h2>uzbekistan</h2>
              <p>
                {mountainsData.length}
                peaks
              </p>
              <p>
                last update
                <br />
                <span>
                  on
                  {date}
                </span>
                <br />
                <span>
                  at
                  {time}
                </span>
              </p>
            </div>
          )
          : (
            <div className={styles.current_weather}>
              <h2>{id}</h2>
              <p>current weather</p>
              <ul className={styles.weather}>
                <li>
                  temperature
                  <span>
                    {mainData.temperature}
                    °C
                  </span>
                </li>
                <li>
                  wind speed
                  <span>
                    {mainData.windspeed}
                    km/h
                  </span>
                </li>
                <li>
                  wind direction
                  <span>
                    {mainData.winddirection}
                    °
                  </span>
                </li>
              </ul>
              <p>
                last update
                <br />
                <span>
                  {date}
                </span>
                <span>
                  at
                  {time}
                </span>
              </p>
            </div>
          )
      }
    </div>
  );
};

export default MainData;
