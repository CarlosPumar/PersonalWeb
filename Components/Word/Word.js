import styles from './Word.module.css';

export default function Word({ children }) {
  return <span className={styles.word}>{children}</span>;
}
