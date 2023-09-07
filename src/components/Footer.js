import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <p>
      The weather forecast and all info about spots is provided for
      personal non-commercial use.
    </p>
    <p>
      Mountains Forecast does not promise any specific results from
      the use of its service.
    </p>
    <p>© 2023 Mountains Forecast</p>

    <div className={styles.contacts}>
      <p>
        <a href="#/">Send a message</a>
        <Link to="/about">About</Link>
      </p>
    </div>
  </div>
);

export default Footer;
