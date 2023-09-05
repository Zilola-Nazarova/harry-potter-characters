import styles from '@/styles/Header.module.css'
import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          <li className={styles.arrow}>
            <Link to={`/`}>
              <IoIosArrowBack />
            </Link>
          </li>
          <li className={styles.title}>
            <Link to={`/`}>
              <h1>
                mountains forecast
              </h1>   
            </Link>
          </li>
          <li>
            <Link to={`/about`}>
              about
            </Link>
          </li>
          <li ref={ref}>
            <button onClick={() => setDropdown((prev) => !prev)}>
              models
            </button>
            {dropdown && (<ul>
              <li>
                <Link to={`/models/icon`}>
                  ICON
                </Link>
              </li>
              <li>
                <Link to={`/models/gfs`}>
                  GFS
                </Link>
              </li>
            </ul>)}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
