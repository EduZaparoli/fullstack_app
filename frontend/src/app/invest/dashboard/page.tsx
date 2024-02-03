"use client"
import { Box, Button, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { AuthStore } from "../../stores/AuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { isAuthenticated, logout } = new AuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const userLogout = () => {
    logout();
    router.push('/')
  }

  return (
    <Container navbar>
      <Box padding={6} boxShadow='lg' bg='white' marginTop={24} marginLeft={14} marginRight={14}>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box padding={6} boxShadow='lg' bg='white' marginTop={8} marginLeft={14} marginRight={14}>
        <Stack>
          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
        </Stack>
      </Box>

      <Box alignItems={'center'} justifyContent={'center'} display={'flex'} padding={10}>
        <Button colorScheme='teal' variant='solid' size={'lg'} onClick={userLogout}>Sair</Button>
      </Box>
    </Container>
  );
}

export default Dashboard;
