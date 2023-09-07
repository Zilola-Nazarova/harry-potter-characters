import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <p>© 2023 Harry Potter Library</p>
    <div className={styles.contacts}>
      <p>
        <a href="#/">Send a message</a>
        <Link to="/about">About</Link>
      </p>
    </div>
  </div>
);

export default Footer;
