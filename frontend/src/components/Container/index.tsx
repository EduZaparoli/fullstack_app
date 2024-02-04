import { Box } from "@chakra-ui/react"
import { Navbar } from "../Navbar";

interface IProps {
  children: React.ReactNode;
  align?: string;
  justifyContent?: string;
  navbar?: boolean;
  avatar?: React.ReactNode;
  theme?: React.ReactNode;
}

export const Container = ({ children, align, justifyContent, navbar = false, avatar = false, theme = false }: IProps) => {

  return (
    <>
      {navbar && <Navbar avatar={avatar} theme={theme} justifyContent={justifyContent} />}
      <Box height={"92vh"} alignItems={align}>
        {children}
      </Box>
    </>
  )
}