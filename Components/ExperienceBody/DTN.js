import styles from './ExperienceBody.module.css';

export default function DTN() {
  return (
    <>
      <h2>DTNº</h2>
      <h3>Software Engineer</h3>
      <h5>09/2021 - 12/2021</h5>
      <ul className={styles.list}>
        <li>Developing and fixing React Components</li>
        <li>
          Refactoring the obtaning of data via API Rest and Redux and Saga
        </li>
        <li>Configuring Docker and Docker-compose files</li>
        <li>Configuring MongoDB and MySQL databases</li>
      </ul>
    </>
  );
}
