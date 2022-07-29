import Button from '../../CommonComponets/Button/Button';
import styles from './ProjectBody.module.css';
import FullStackOpen from './FullStackOpen';
import AB3 from './AB3';
import PersonalWebPage from './PersonalWebPage';
import { useState } from 'react';

export default function ProjectBody() {
  const arrayProjects = [
    <FullStackOpen key="FullStackOpen" />,
    <AB3 key="AB3" />,
    <PersonalWebPage key="PersonalWebPage" />,
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
      <h1>Projects</h1>
      {arrayProjects[project]}
      <Button onClick={next} text={'{ ...nextProject }'} />
    </>
  );
}
