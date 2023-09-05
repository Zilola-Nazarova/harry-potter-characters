import { useSelector } from 'react-redux';
import uz from '../assets/uz-03.svg';
import mountainsData from '@/database/mountainsData';
import styles from '@/styles/MainData.module.css';
import { useParams } from 'react-router';

const MainData = ({main_data}) => {
  const { id } = useParams();
  const time = useSelector((store) =>
    store.mountains.mountains[0].time
  );
  const date = useSelector((store) =>
  store.mountains.mountains[0].date
  );

  return (
    <div className={styles.country}>
      <img src={uz}></img>
        {
          (!id) ?
          <div className={styles.homepage_text}>
            <h2>uzbekistan</h2>
            <p>{mountainsData.length} peaks</p>
            <p>last update
              <br />
              <span>on {date}</span>
              <br />
              <span>at {time}</span>
            </p>
          </div>
          :
          <div className={styles.current_weather}>
            <h2>{id}</h2>
            <p>current weather</p>
            <ul className={styles.weather}>
                <li>temperature <span>{main_data.temperature} °C</span></li>
                <li>wind speed <span>{main_data.windspeed} km/h</span></li>
                <li>wind direction <span>{main_data.winddirection} °</span></li>
            </ul>
            <p>last update
              <br/>
              <span>{date} </span>{' '}
              <span> at {time}</span>
            </p>
          </div>
        }
      </div>
  )
}

export default MainData;