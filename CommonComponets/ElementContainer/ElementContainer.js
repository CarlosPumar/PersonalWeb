import styles from './ElementContainer.module.css';

export default function ElementContainer({ children }) {
  return <div className={styles.floatChild}>{children}</div>;
}
