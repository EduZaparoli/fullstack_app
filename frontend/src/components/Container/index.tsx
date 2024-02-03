import { Box, Flex } from "@chakra-ui/react"
import { Navbar } from "../Navbar";

interface IProps {
  children: React.ReactNode;
  align?: string;
  justifyContent?: string;
  navbar?: boolean;
  avatar?: React.ReactNode;
}

export const Container = ({ children, align, justifyContent, navbar = false, avatar = false }: IProps) => {

  return (
    <>
      {navbar && <Navbar avatar={avatar} />}
      <Box height={"92vh"} alignItems={align} justifyContent={justifyContent}>
        {children}
      </Box>
    </>
  )
}