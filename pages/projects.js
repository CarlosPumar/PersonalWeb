import Page from '../CommonComponets/Page/Page';
import Image from 'next/image';
import Container from '../CommonComponets/Container/Container';
import ElementContainer from '../CommonComponets/ElementContainer/ElementContainer';
import ProjectBody from '../Components/ProjectsBody/ProjectBody';

export default function Projects() {
  return (
    <Page>
      <Container>
        <ElementContainer>
          <ProjectBody />
        </ElementContainer>
        <ElementContainer>
          <Image src="/img/code1.png" alt="code" width={400} height={400} />
        </ElementContainer>
      </Container>
    </Page>
  );
}
