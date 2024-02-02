import { Flex } from '@chakra-ui/react';
import { Container } from './components/Container';
import { LoginContainer } from './components/LoginContainer';

const Home = () => {

  return (
    <>
      <Container align='center' justifyContent='center'>
        <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
          <LoginContainer />
        </Flex>
      </Container>
    </>
  );
}

export default Home;
