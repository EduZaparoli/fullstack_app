import { Avatar, Box, Button, Flex, Image, Switch, Text, WrapItem, useColorMode, useColorModeValue } from "@chakra-ui/react"

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const formBackGround = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex height={"8vh"} alignItems={"center"} justifyContent={"space-between"} paddingLeft={10} paddingRight={10} background={formBackGround}>
      <Box width={12} >
        <Image src='https://cdn-icons-png.flaticon.com/128/5564/5564318.png' alt='LOGO' />
      </Box>
      <WrapItem alignItems={'center'}>
        <Box padding={5}>
          <Avatar name="Eduardo Zaparoli" src="" background={"gray.300"} />
        </Box>
        <Box>
          <Button size={'sm'} onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Box>
      </WrapItem>
    </Flex>
  )
}