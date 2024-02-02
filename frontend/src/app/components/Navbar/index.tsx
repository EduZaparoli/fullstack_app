import { Avatar, Flex, Text, WrapItem } from "@chakra-ui/react"

export const Navbar = () => {
    return (
        <Flex height={"8vh"} alignItems={"center"} justifyContent={"space-between"} paddingLeft={8} paddingRight={8} background={"gray.200"}>
            <Text>LOGO</Text>
            <WrapItem>
                <Avatar name="Eduardo Zaparoli" src="" background={"gray.300"} />
            </WrapItem>
        </Flex>
    )
}