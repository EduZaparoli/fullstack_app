"use client"
import { Button, Flex, Heading, Input } from "@chakra-ui/react"

interface IProps {
  email: string;
  password: string;
  onEmail: (value: string) => void;
  onPassword: (value: string) => void;
  onContinue: () => void
}

export const LoginContainer = ({ email, password, onEmail, onPassword, onContinue }: IProps) => {

  return (
    <Flex direction={"column"} background={"gray.100"} p={24} rounded={24} margin={5}>
      <Heading mb={6}>Log in</Heading>
      <Input placeholder='E-mail' variant={"filled"} mb={3} type='email' onChange={(e) => onEmail(e.target.value)} value={email} />
      <Input placeholder='Password' variant={"filled"} mb={6} type='password' onChange={(e) => onPassword(e.target.value)} value={password} />
      <Button onClick={onContinue} colorScheme='teal'>Log in</Button>
    </Flex>
  )
}