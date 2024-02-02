import { Box, Flex } from "@chakra-ui/react"
import { Navbar } from "../Navbar";

interface IProps {
    children: React.ReactNode;
    align?: string;
    justifyContent?: string;
    navbar?: boolean;
}

export const Container = ({children, align, justifyContent, navbar = false}: IProps) => {
    
    return (
        <>
            {navbar && <Navbar />}
            <Box height={"92vh"} alignItems={align} justifyContent={justifyContent}>
                {children}
            </Box>
        </>
    )
}