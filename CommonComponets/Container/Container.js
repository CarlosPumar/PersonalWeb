import styles from './Container.module.css';

export default function Container({ children }) {
  return (
    <div className={styles.externalDiv}>
      <div className={styles.floatContainer}>{children}</div>
    </div>
  );
}
