import styles from './Word.module.css';

export default function Word({ word }) {
  return <span className={styles.word}>{word}</span>;
}
