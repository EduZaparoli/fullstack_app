import { Button, Flex, Heading, Input } from "@chakra-ui/react"

export const LoginContainer = () => {
    return (
        <Flex direction={"column"} background={"gray.100"} p={24} rounded={24}>
          <Heading mb={6}>Log in</Heading>
          <Input placeholder='E-mail' variant={"filled"} mb={3} type='email' />
          <Input placeholder='Password' variant={"filled"} mb={6} type='password' />
          <Button colorScheme='teal'>Log in</Button>
        </Flex>
    )
}