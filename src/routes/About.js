import styles from '../styles/About.module.css';

const About = () => (
  <div className={styles.about}>
    <h2 className={styles.bright}>What is Mountains Forecast?</h2>
    <p>
      Mountains Forecast is a site that lists down the mountains
      located in Uzbekistan with the following data for each
      mountain:
    </p>
    <ul className={styles.dark}>
      <li>elevation (in m)</li>
      <li>weather code (index)</li>
    </ul>
    <p>
      When a mountain is selected, current weather
      and hourly forecasts are displayed:
    </p>
    <ul>
      <li className={styles.bright}>
        <span>current weather:</span>
        <ul>
          <li>temperature (in °C)</li>
          <li>wind speed (in km/h)</li>
          <li>wind direction (in °)</li>
        </ul>
      </li>
      <li className={styles.bright}>
        <span>hourly forecast:</span>
        <ul>
          <li>temperature (in °C)</li>
          <li>precipitation (in mm)</li>
          <li>wind speed (in km/h)</li>
          <li>cloudcover (in %)</li>
        </ul>
      </li>
    </ul>
    <p>
      You can swith the displayed forecast to show information
      according to ICON or GFS forecast models.
    </p>
    <p>
      Every page containing the weather data displays
      information about the last update under the navigation
      bar.
    </p>
    <p>
      The navigation bar has Models button with links to
      information about main forecast models: ICON and GFS.
    </p>

    <div className={styles.credits}>
      <h3 className={styles.bright}>thanks</h3>
      <p>
        Weather information by
        {' '}
        <a target="_blank" rel="noreferrer" href="https://open-meteo.com/">
          open-meteo.com
        </a>
        API.
      </p>
      <p>
        Map of Uzbekistan by
        {' '}
        <a target="_blank" rel="noreferrer" href="https://vemaps.com/">
          Vemaps.com
        </a>
        .
      </p>
      <p>
        Original design idea by
        {' '}
        <a target="_blank" rel="noreferrer" href="https://www.behance.net/sakwadesignstudio">
          Nelson Sakwa
        </a>
        on Behance.
      </p>
    </div>
  </div>
);

export default About;
