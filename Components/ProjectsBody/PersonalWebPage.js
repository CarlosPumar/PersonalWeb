import styles from './ProjectBody.module.css';
import Word from '../Word/Word';

export default function PersonalWebPage() {
  return (
    <>
      <h3>Personal Web Page</h3>
      <p>
        Personal web page where you are right now! It is a static web made by{' '}
        <Word>NextJS</Word> to be super fast when serving the data. It doesn
        {`'`}t use any style framework, it is design from 0 with{' '}
        <Word>CSS</Word> style modules.
      </p>
      <a
        className={styles.link}
        href="https://github.com/CarlosPumar/PersonalWeb"
        target="_blank"
        rel="noreferrer"
      >
        Repository
      </a>
    </>
  );
}
