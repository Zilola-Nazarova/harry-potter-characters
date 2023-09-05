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
      <div>
        {
          (!id) ?
          <>
            <h2>uzbekistan</h2>
            <p>{mountainsData.length} peaks</p>
            <p>last update:
              <br />
              {time}
              <br />
              {date}
            </p>
          </>
          :
          <>
            <h2>{id}</h2>
            <p>current weather</p>
            <ul className={styles.weather}>
                <li>temperature {main_data.temperature}</li>
                <li>wind speed {main_data.windspeed}</li>
                <li>wind direction {main_data.winddirection}</li>
                <li>updated on {main_data.time}</li>
            </ul>
          </>
        }
      </div>
    </div>
  )
}

export default MainData;