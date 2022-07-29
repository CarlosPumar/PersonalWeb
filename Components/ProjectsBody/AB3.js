import styles from './ProjectBody.module.css';

export default function AB3() {
  return (
    <>
      <h3>AutoBetting365</h3>
      <p>AB3 is an app that bet depending on the Twitter data.</p>
      <p>
        The backend is an API Rest created by Django. The API is protected by
        JWT authorization. The players state is updated automatically by
        Twitter. A websocket is used for the Twitter connection.
      </p>
      <p>
        Frontend to manage the app developed by React. Google Chrome extension
        creation that consumes the API via websocket
      </p>
      <a
        className={styles.link}
        href="https://github.com/CarlosPumar/AB3_Frontend"
        target="_blank"
        rel="noreferrer"
      >
        Frontend
      </a>
      <span> - </span>
      <a
        className={styles.link}
        href="https://github.com/CarlosPumar/AB3_Project"
        target="_blank"
        rel="noreferrer"
      >
        Backend
      </a>
    </>
  );
}
