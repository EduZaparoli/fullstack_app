"use client"
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

export const LoginContainer = () => {

  const router = useRouter()

  const onContinue = () => {
    router.push('/dashboard', { scroll: false })
  }

    return (
        <Flex direction={"column"} background={"gray.100"} p={24} rounded={24} margin={5}>
          <Heading mb={6}>Log in</Heading>
          <Input placeholder='E-mail' variant={"filled"} mb={3} type='email' />
          <Input placeholder='Password' variant={"filled"} mb={6} type='password' />
          <Button onClick={onContinue} colorScheme='teal'>Log in</Button>
        </Flex>
    )
}