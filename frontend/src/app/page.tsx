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

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onContinue = async () => {
    try {
      await fetchAccessToken(first_name, last_name, email, password)
      router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container align='center' justifyContent='center'>
        <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
          <LoginContainer onContinue={onContinue} firstName={first_name} lastName={last_name} email={email} password={password} onFirstNameChange={setFirstName} onLastNameChange={setLastName} onEmail={setEmail} onPassword={setPassword} />
        </Flex>
      </Container>
    </>
  );
}

export default Home;
