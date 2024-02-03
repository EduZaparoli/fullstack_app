"use client"
import { Flex } from '@chakra-ui/react';
import { Container } from './components/Container';
import { LoginContainer } from './components/LoginContainer';
import { useState } from 'react';
import { AuthStore } from './stores/AuthStore';
import { useRouter } from 'next/navigation';

const Home = () => {

  const { fetchAccessToken } = new AuthStore()

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onContinue = async () => {
    try {
      await fetchAccessToken(email, password)
      router.push('invest/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container align='center' justifyContent='center'>
        <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
          <LoginContainer onContinue={onContinue} email={email} password={password} onEmail={setEmail} onPassword={setPassword} />
        </Flex>
      </Container>
    </>
  );
}

export default Home;
