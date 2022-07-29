import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.css';

export default function Nav() {
  const router = useRouter();
  let page = '';

  if (router?.pathname === '/about') page = '.about()';
  if (router?.pathname === '/experience') page = '.experience()';
  if (router?.pathname === '/projects') page = '.projects()';

  return (
    <>
      <nav className={styles.element}>
        <ul>
          <li className={styles.currentPage}>
            <a>{page}</a>
          </li>
          <li className={styles.link}>
            <Link href="/projects">
              <a>.projects()</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/experience">
              <a>.experience()</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">
              <a>.about()</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
