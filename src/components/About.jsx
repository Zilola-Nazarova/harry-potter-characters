import styles from '@/styles/About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.bright}>What is mountainsforecast.uz?</h2>
      <p>Mountains Forecast is a site that lists down the mountains located in Uzbekistan with the following data for each mountain:</p>
      <ul className={styles.dark}>
        <li>elevation (in m)</li>
        <li>weather code (index)</li>
      </ul>
      <p>When a mountain is selected, current weather and hourly forecasts are displayed:</p>
      <ul>
        <li className={styles.bright}><span>current weather:</span>
          <ul className={styles.dark}>
            <li>temperature (in °C)</li>
            <li>wind speed (in km/h)</li>
            <li>wind direction (in °)</li>
          </ul>
        </li>
        <li className={styles.bright}><span>hourly forecast:</span>
          <ul className={styles.dark}>
            <li>temperature (in °C)</li>
            <li>precipitation (in mm)</li>
            <li>wind speed (in km/h)</li>
            <li>cloudcover (in %)</li>
          </ul>
        </li>
      </ul>
      <p>You can swith the displayed forecast to show information according to ICON or GFS forecast models.</p>
      <p>The navigation bar has Models button with links to information about main forecast models: ICON and GFS</p>
    </div>
  )
}

export default About;
