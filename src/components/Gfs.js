import styles from '../styles/Models.module.css';

const Gfs = () => (
  <div className={styles.gfs}>
    <p>
      See the full article on
      {' '}
      <a rel="noreferrer" href="https://windy.app/blog/what-is-gfs-weather-forecast-model.html" target="_blank">
        Windy.app
      </a>
      .
    </p>
    <h2>What is GFS27 weather forecast model?</h2>
    <p>
      The GFS (Global Forecast System) is the most well-known global weather
      model and it&rsquo;s updated every six hours&nbsp;produced by the
      National Centers for Environmental Prediction (NCEP) of the United
      States National Oceanic and Atmospheric Administration (NOAA).
    </p>
    <p>
      It is actually made up of 4 separate models which work together to
      paint an accurate picture of weather conditions: atmospheric, ocean,
      land/soil and sea ice models.
    </p>
    <p>
      However, it doesn&rsquo;t take topography and shapes of coastlines
      into account, so it isn&rsquo;t very accurate for places next to bodies
      of water. Good for oceans.
    </p>
    <p>
      The official website of the model is
      {' '}
      <a rel="noreferrer" href="https://www.ncdc.noaa.gov/data-access/model-data/model-datasets/global-forcast-system-gfs" target="_blank">
        Ncdc.noaa.gov
      </a>
      .
    </p>
    <h2>What are the main features of GFS weather model and how it works?</h2>
    <p>
      <strong>The GFS model has various resolutions of 27 km.</strong>
      &nbsp;The resolution is the distance between two points of the weather
      model grid. Bigger resolutions of 50 to 10 km in size are usually
      deployed in relatively flat terrains, while mountain ranges require
      the nodes to be a lot closer to each other, usually 5, 2, or 1 km.
    </p>
    <p>
      <strong>The forecast depth of GFS27 weather model is 10 days.</strong>
      &nbsp;The depth of the weather forecast is the number of hours or days
      for which the forecast is made. As a rule, the lower the depth, the
      more accurate the forecast.
    </p>
    <p>
      <strong>The GFS forecast step is 1/3 hour(s)&nbsp;</strong>
      depending on the forecast period: 1 h for the first 120 hours (5 days),
      then 3 hourly for days 5&ndash;16.&nbsp;The forecast step is for how
      long you can see a forecast in the application or on a website. There
      are two main step types: 1 h and 3 h.
    </p>
    <p>
      <strong>The GFS27 updates frequency is 4 times a day.</strong>
      &nbsp;The update frequency of the forecast is the regular time interval
      after which new forecast data is received from the supercomputers.
      There are models like HRRR with 24 times a day updates, but in general,
      the frequency of the updates of weather models is 1, 2, or rather 4
      times a day.
    </p>
  </div>
);

export default Gfs;
