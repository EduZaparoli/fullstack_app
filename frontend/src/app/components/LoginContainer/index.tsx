"use client"
import { Button, Flex, Heading, Input } from "@chakra-ui/react"

interface IProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmail: (value: string) => void;
  onPassword: (value: string) => void;
  onContinue: () => void
}

export const LoginContainer = ({firstName, lastName, email, password, onFirstNameChange, onLastNameChange, onEmail, onPassword, onContinue}: IProps) => {

    return (
        <Flex direction={"column"} background={"gray.100"} p={24} rounded={24} margin={5}>
          <Heading mb={6}>Log in</Heading>
          <Input placeholder='First Name' variant={"filled"} mb={3} type='text' onChange={(e) => onFirstNameChange(e.target.value)} value={firstName} />
          <Input placeholder='Last Name' variant={"filled"} mb={3} type='text' onChange={(e) => onLastNameChange(e.target.value)} value={lastName}/>
          <Input placeholder='E-mail' variant={"filled"} mb={3} type='email' onChange={(e) => onEmail(e.target.value)} value={email}/>
          <Input placeholder='Password' variant={"filled"} mb={6} type='password' onChange={(e) => onPassword(e.target.value)} value={password}/>
          <Button onClick={onContinue} colorScheme='teal'>Log in</Button>
        </Flex>
    )
}