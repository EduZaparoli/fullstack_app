import { Avatar, Box, Flex, Image, Text, WrapItem } from "@chakra-ui/react"

export const Navbar = () => {
  return (
    <Flex height={"8vh"} alignItems={"center"} justifyContent={"space-between"} paddingLeft={10} paddingRight={10} background={"gray.200"}>
      <Box width={12} >
        <Image src='https://cdn-icons-png.flaticon.com/128/5564/5564318.png' alt='LOGO' />
      </Box>
      <WrapItem>
        <Avatar name="Eduardo Zaparoli" src="" background={"gray.300"} />
      </WrapItem>
    </Flex>
  )
}