import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navigation}>
      <ul>
        <li className={styles.arrow}>
          <NavLink to="/">
            <IoIosArrowBack />
          </NavLink>
        </li>
        <li className={styles.title}>
          <NavLink to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink data-testid="clickAbout" to="/about">
            about
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
