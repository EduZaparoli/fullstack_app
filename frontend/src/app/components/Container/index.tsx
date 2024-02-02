import { Flex } from "@chakra-ui/react"

interface IProps {
    children: React.ReactNode;
    align?: string;
    justifyContent?: string;
}

export const Container = ({children, align, justifyContent}: IProps) => {
    
    return (
        <Flex height={"96vh"} alignItems={align} justifyContent={justifyContent}>
            {children}
        </Flex>
    )
}