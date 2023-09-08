import styles from '../styles/About.module.css';

const About = () => (
  <div className={styles.about}>
    <h2 className={styles.bright}>What is Harry Potter Lybrary?</h2>
    <p>
      Harry Potter Lybrary is a site that lists down main Harry Potter
      characters with the following data:
    </p>
    <ul className={styles.dark}>
      <li>Name</li>
      <li>House</li>
      <li>Alive/Not alive</li>
      <li>Character&apos;s portrait</li>
    </ul>
    <p>
      When a character is selected, more data about this character
      is displayed such as:
    </p>
    <ul>
      <li>Wand properties</li>
      <li>Patronus animal</li>
      <li>Date of birth</li>
      <li>Ancestry</li>
    </ul>
    <p>
      The home page has a search bar where you can type your
      character&apos;s name to find the information faster.
    </p>

    <div className={styles.credits}>
      <h3 className={styles.bright}>thanks</h3>
      <p>
        Harry Potter characters information by
        {' '}
        <a target="_blank" rel="noreferrer" href="https://hp-api.onrender.com/">
          hp-api.onrender.com/
        </a>
        API.
      </p>
      <p>
        Original design idea by
        {' '}
        <a target="_blank" rel="noreferrer" href="https://www.behance.net/sakwadesignstudio">
          Nelson Sakwa
        </a>
        on Behance.
      </p>
    </div>
  </div>
);

export default About;
