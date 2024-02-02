import { Container } from './components/Container';
import { LoginContainer } from './components/LoginContainer';

const Home = () => {

  return (
    <>
      <Container align='center' justifyContent='center'>
        <LoginContainer />
      </Container>
    </>
  );
}

export default Home;
