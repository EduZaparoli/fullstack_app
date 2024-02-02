import { Flex } from "@chakra-ui/react"

interface IProps {
    children: React.ReactNode
}

export const Container = ({children}: IProps) => {
    
    return (
        <Flex height={"96vh"} alignItems={"center"} justifyContent={"center"}>
            {children}
        </Flex>
    )
}