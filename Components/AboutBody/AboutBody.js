import Image from 'next/image';
import Word from '../Word/Word';
import styles from './AboutBody.module.css';

export default function AboutBody() {
  return (
    <>
      <h1 className={styles.h1}>
        <Word>CARLOS</Word> PUMAR JIMÉNEZ
      </h1>
      <h3>Software Engineer - Frontend</h3>
      <p>
        I{`'`}m a Software Engineer graduated in Pablo de Olavide University,
        with a passion for everything related to the frontend and emerging
        technologies.
      </p>
      <p>
        I really enjoy meeting new people, to talk about technology, both to
        learn and share knowledge.
      </p>
      <p className={styles.p}>
        Please, don{`'`}t hesitate to reach me out on any of my media!
      </p>
      <a
        className={styles.link}
        href="/cv.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/img/cv.png" alt="cv" width={30} height={30} />
      </a>
      <a
        className={styles.link}
        href="https://www.linkedin.com/in/carlospumarjimenez/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/img/linkdin.png" alt="linkdin" width={30} height={30} />
      </a>
      <a
        className={styles.link}
        href="https://github.com/CarlosPumar"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/img/github.png" alt="github" width={30} height={30} />
      </a>
    </>
  );
}
