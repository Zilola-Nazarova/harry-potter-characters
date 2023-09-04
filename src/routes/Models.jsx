import { useParams } from 'react-router';

const Models = () => {
  const {id} = useParams();

  return (
    (id === 'icon') ?
    <>
      <p>See the full article on <a href="https://windy.app/blog/what-is-icon-weather-model-forecast.html">Windy.app</a></p>
      <p>{id}</p>
      <h2>What is ICON weather forecast model?</h2>
      <p>The ICON (Icosahedral Nonhydrostatic) is a suit of models created by the German national weather service or DWD (Deutscher Wetterdienst). There are at least three major ICON models: ICON-D2 for Central Europe, ICON7 for Europe as a whole, and ICON13 for the world. So it is both hyper-local, regional and global weather forecast model.</p>
      <ul>
        <li>Thanks to its high resolution, ICON-D2 takes into account the terrain and also predicts severe weather better comparing to other regional models, which makes it excellent for adjusting your plans for today and tomorrow.</li>
        <li>In Europe, ICON7 it is considered to be even more accurate than the ECMWF also due to the better resolution.</li>
        <li>ICON13 is the world's third most popular global weather model after the same ECMWF and American GFS. It is in competition with them.</li>
      </ul>
      <p>In general the most important variables of the ICON are air density and virtual potential temperature, horizontal and vertical wind speed, humidity, cloud water, cloud ice, rain and snow.</p>
      <p>Its small-scale part includes the COSMO model, which was fully integrated into the ICON in 2020.</p>
      <p>The official website of the model is <a href="https://www.dwd.de/EN/ourservices/nwp_forecast_data/nwp_forecast_data.html" target="_blank" rel="noopener">Dwd.de</a>.</p>
    </>
    :
    <>
      <p>See the full article on <a href="https://windy.app/blog/what-is-gfs-weather-forecast-model.html">Windy.app</a></p>
      <h2>What is GFS27 weather forecast model?</h2>
      <p>The GFS (Global Forecast System) is the most well-known global weather model and it&rsquo;s updated every six hours&nbsp;produced by the National Centers for Environmental Prediction (NCEP) of the United States National Oceanic and Atmospheric Administration (NOAA).</p>
      <p>It is actually made up of 4 separate models which work together to paint an accurate picture of weather conditions: atmospheric, ocean, land/soil and sea ice models.</p>
      <p>However, it doesn&rsquo;t take topography and shapes of coastlines into account, so it isn&rsquo;t very accurate for places next to bodies of water. Good for oceans.</p>
      <p>The official website of the model is <a href="https://www.ncdc.noaa.gov/data-access/model-data/model-datasets/global-forcast-system-gfs" target="_blank" rel="noopener">Ncdc.noaa.gov</a>.</p>
      <h2>What are the main features of GFS weather model and how it works?</h2>
      <p><strong>The GFS model has various resolutions of 27 km.</strong>&nbsp;The resolution is the distance between two points of the weather model grid. Bigger resolutions of 50 to 10 km in size are usually deployed in relatively flat terrains, while mountain ranges require the nodes to be a lot closer to each other, usually 5, 2, or 1 km.</p>
      <p><strong>The forecast depth of GFS27 weather model is 10 days.</strong>&nbsp;The depth of the weather forecast is the number of hours or days for which the forecast is made. As a rule, the lower the depth, the more accurate the forecast.</p>
      <p><strong>The GFS forecast step is 1/3 hour(s)&nbsp;</strong>depending on the forecast period: 1 h for the first 120 hours (5 days), then 3 hourly for days 5&ndash;16.&nbsp;The forecast step is for how long you can see a forecast in the application or on a website. There are two main step types: 1 h and 3 h.</p>
      <p><strong>The GFS27 updates frequency is 4 times a day.</strong>&nbsp;The update frequency of the forecast is the regular time interval after which new forecast data is received from the supercomputers. There are models like HRRR with 24 times a day updates, but in general, the frequency of the updates of weather models is 1, 2, or rather 4 times a day.</p>
    </>
  )
}

export default Models;
