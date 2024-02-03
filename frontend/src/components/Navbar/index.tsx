import { Avatar, Box, Button, Flex, Image, Switch, Text, WrapItem, useColorMode, useColorModeValue } from "@chakra-ui/react"

interface IProps {
  avatar?: React.ReactNode;
}

export const Navbar = ({ avatar }: IProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const formBackGround = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex height={"8vh"} alignItems={"center"} justifyContent={"space-between"} paddingLeft={10} paddingRight={10} background={formBackGround}>
      <Box width={12} >
        <Image src='https://cdn-icons-png.flaticon.com/128/5564/5564318.png' alt='LOGO' />
      </Box>
      <WrapItem alignItems={'center'}>
        <Box>
          <Button size={'sm'} onClick={toggleColorMode} boxShadow='base' p='1' rounded='md'>
            {colorMode === 'light' ? 'Dark' : 'Light'} Theme
          </Button>
        </Box>
        {avatar &&
          <Box padding={5}>
            <Avatar name="Eduardo Zaparoli" src="https://i.pinimg.com/736x/f1/4f/00/f14f00c1f7e155220268ed7eb1f9487f.jpg" background={"gray.300"} />
          </Box>
        }
      </WrapItem>
    </Flex>
  )
}