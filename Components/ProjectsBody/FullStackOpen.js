import styles from './ProjectBody.module.css';

export default function FullStackOpen() {
  return (
    <>
      <h3>Full Stack Open</h3>
      <p>
        A Course focused in modern web development with Javascript. The main
        focus is on building single page applications with ReactJS that use REST
        APIs built with Node.js.
      </p>
      <p>
        In this course I have learnt technologies like React, Redux, Node,
        Express, Jest, Cypress, MongoDB, GraphQL and good practices in web
        development.
      </p>
      <a
        className={styles.link}
        href="https://github.com/CarlosPumar/CursoFullStack"
        target="_blank"
        rel="noreferrer"
      >
        Repository
      </a>
      <span> - </span>
      <a
        className={styles.link}
        href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/19396b38f7650fb174f5382fa1980ac9"
        target="_blank"
        rel="noreferrer"
      >
        Certification
      </a>
      <span> - </span>
      <a
        className={styles.link}
        href="https://fullstackopen.com/en/"
        target="_blank"
        rel="noreferrer"
      >
        FullStackOpen
      </a>
    </>
  );
}
