import Page from '../CommonComponets/Page/Page';
import Image from 'next/image';
import Container from '../CommonComponets/Container/Container';
import ElementContainer from '../CommonComponets/ElementContainer/ElementContainer';
import AboutBody from '../Components/AboutBody/AboutBody';

export default function About() {
  return (
    <Page>
      <Container>
        <ElementContainer>
          <Image src="/img/code1.png" alt="code" width={400} height={400} />
        </ElementContainer>
        <ElementContainer>
          <AboutBody />
        </ElementContainer>
      </Container>
    </Page>
  );
}
