import styles from './ExperienceBody.module.css';
import Word from '../Word/Word';

export default function DTN() {
  return (
    <>
      <h2>DTNº</h2>
      <h3>Software Engineer</h3>
      <h5>09/2021 - 12/2021</h5>
      <ul className={styles.list}>
        <li>
          Developing and fixing <Word>React</Word> Components
        </li>
        <li>
          Refactoring the obtaning of data via <Word>API Rest</Word> and{' '}
          <Word>Redux</Word> and <Word>Saga</Word>
        </li>
        <li>
          Configuring <Word>Docker</Word> and <Word>Docker-compose</Word> files
        </li>
        <li>
          Configuring <Word>MongoDB</Word> and <Word>MySQL</Word> databases
        </li>
      </ul>
    </>
  );
}
