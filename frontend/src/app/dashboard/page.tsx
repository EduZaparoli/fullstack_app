import { Box, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";
import { Container } from "../components/Container";

export default function Dashboard() {

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
        </Container>
    );
  }
  