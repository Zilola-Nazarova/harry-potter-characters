import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import styles from '../styles/Header.module.css';
import useOnClickOutside from './useOnClickOutside';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  return (
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
              <h1>
                home
              </h1>
            </NavLink>
          </li>
          <li>
            <NavLink data-testid="clickAbout" to="/about">
              about
            </NavLink>
          </li>
          <li ref={ref}>
            <NavLink to="/models">
              models
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
