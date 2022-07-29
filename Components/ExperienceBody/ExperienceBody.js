import Button from '../../CommonComponets/Button/Button';
import styles from './ExperienceBody.module.css';
import DTN from './DTN';
import YouCouldBeNext from './YouCouldBeNext';
import { useState } from 'react';

export default function ExperienceBody() {
  const arrayExperiences = [
    <DTN key="DTN" />,
    <YouCouldBeNext key="YouCouldBeNext" />,
  ];

  const [experience, setExperience] = useState(0);

  const next = () => {
    setExperience((previus) => {
      if (previus === arrayExperiences.length - 1) {
        return 0;
      }
      return previus + 1;
    });
  };

  return (
    <>
      <h1>Experience</h1>
      {arrayExperiences[experience]}
      <Button onClick={next} text={'{ ...next }'} />
    </>
  );
}
