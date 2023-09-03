import styles from '@/styles/Header.module.css'
import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  
  return (
    <header className={styles.header}>
      <h1>
        <Link to={`/`}>
          Mountains Forecast
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>
              Home
            </Link>
          </li>
          <li>
            <Link to={`/about`}>
              About
            </Link>
          </li>
          <li ref={ref}>
            <button onClick={() => setDropdown((prev) => !prev)}>
              Models <span>&#8595;</span>
            </button>
            {dropdown && (<ul>
              <li>ICON</li>
              <li>GFS</li>
            </ul>)}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
