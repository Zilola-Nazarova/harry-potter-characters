import styles from '../styles/Models.module.css';

const Icon = () => (
  <div className={styles.icon}>
    <p>
      See the full article on
      {' '}
      <a rel="noreferrer" href="https://windy.app/blog/what-is-icon-weather-model-forecast.html" target="_blank">
        Windy.app
      </a>
    </p>
    <h2>What is ICON weather forecast model?</h2>
    <p>
      The ICON (Icosahedral Nonhydrostatic) is a suit of models created by
      the German national weather service or DWD (Deutscher Wetterdienst).
      There are at least three major ICON models: ICON-D2 for Central Europe,
      ICON7 for Europe as a whole, and ICON13 for the world. So it is both
      hyper-local, regional and global weather forecast model.
    </p>
    <ul>
      <li>
        Thanks to its high resolution, ICON-D2 takes into account the terrain
        and also predicts severe weather better comparing to other regional
        models, which makes it excellent for adjusting your plans for today and
        tomorrow.
      </li>
      <li>
        In Europe, ICON7 it is considered to be even more accurate than the
        ECMWF also due to the better resolution.
      </li>
      <li>
        ICON13 is the world&apos;s third most popular global weather model after
        the same ECMWF and American GFS. It is in competition with them.
      </li>
    </ul>
    <p>
      In general the most important variables of the ICON are air density
      and virtual potential temperature, horizontal and vertical wind speed,
      humidity, cloud water, cloud ice, rain and snow.
    </p>
    <p>
      Its small-scale part includes the COSMO model, which was fully integrated
      into the ICON in 2020.
    </p>
    <p>
      The official website of the model is
      {' '}
      <a rel="noreferrer" href="https://www.dwd.de/EN/ourservices/nwp_forecast_data/nwp_forecast_data.html" target="_blank">
        Dwd.de
      </a>
      .
    </p>
  </div>
);

export default Icon;
