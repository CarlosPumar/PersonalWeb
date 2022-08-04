import Page from '../CommonComponets/Page/Page';
import Image from 'next/image';
import Container from '../CommonComponets/Container/Container';
import ElementContainer from '../CommonComponets/ElementContainer/ElementContainer';
import ExperienceBody from '../Components/ExperienceBody/ExperienceBody';

export default function Projects() {
  return (
    <Page>
      <Container>
        <ElementContainer>
          <ExperienceBody />
        </ElementContainer>
        <ElementContainer>
          <Image src="/img/code2.png" alt="code" width={400} height={400} />
        </ElementContainer>
      </Container>
    </Page>
  );
}
