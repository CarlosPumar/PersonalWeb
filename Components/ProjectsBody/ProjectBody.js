import Button from '../../CommonComponets/Button/Button';
import styles from './ProjectBody.module.css';
import FullStackOpen from './FullStackOpen';
import AB3 from './AB3';
import PersonalWebPage from './PersonalWebPage';
import { useState } from 'react';
import Container from '../../CommonComponets/Container/Container';
import ElementContainer from '../../CommonComponets/ElementContainer/ElementContainer';
import Image from 'next/image';

export default function ProjectBody() {
  const arrayProjects = [
    <FullStackOpen key="FullStackOpen" />,
    <AB3 key="AB3" />,
    <PersonalWebPage key="PersonalWebPage" />,
  ];

  const arrayImageProjects = [
    <Image
      key="FullStackOpen"
      src="/img/react.png"
      alt="code"
      width={400}
      height={350}
    />,
    <Image
      key="AB3"
      src="/img/django.png"
      alt="code"
      width={400}
      height={400}
    />,
    <Image
      key="PersonalWebPage"
      src="/img/nextjs.png"
      alt="code"
      width={400}
      height={275}
    />,
  ];

  const [project, setProject] = useState(0);

  const next = () => {
    setProject((previus) => {
      if (previus === arrayProjects.length - 1) {
        return 0;
      }
      return previus + 1;
    });
  };

  return (
    <>
      <Container>
        <ElementContainer>
          <h1>Projects</h1>
          {arrayProjects[project]}
          <Button onClick={next} text={'{ ...nextProject }'} />
        </ElementContainer>
        <ElementContainer>{arrayImageProjects[project]}</ElementContainer>
      </Container>
    </>
  );
}
