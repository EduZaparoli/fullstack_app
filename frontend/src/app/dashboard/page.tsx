"use client"
import { Box, Button, Center, Grid, GridItem, Image, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AuthStore } from "../../stores/AuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { TabsComponent } from "@/components/TabsComponent";
import { Actives } from "@/components/Actives";
import { PortfolioValue } from "@/components/PortfolioValue";
import { ChartComponent } from "@/components/Chart";

const chartData = [
  ["Task", "Hours per Day"],
  ["Ações", 25051.01],
  ["Fundos Imobiliários", 25051.01],
  ["Tesouro Direto", 25051.01],
  ["Conta Investimento", 25051.01],
];

const chartOptions = {
  pieHole: 0.8,
  is3D: false,
  backgroundColor: 'transparent',
  legend: 'none',
  pieSliceText: 'none',
  chartArea: {
    width: '90%',
    height: '90%',
  },
  tooltip: { textStyle: { color: 'teal' }, showColorCode: true, trigger: 'selection' },
  pieSliceBorderColor: 'none',
};

const Dashboard = () => {
  const { isAuthenticated, logout } = new AuthStore();
  const router = useRouter();
  const formBackGround = useColorModeValue("gray.100", "gray.600")
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  const userLogout = () => {
    logout();
    router.push('/auth/login')
  }

  return (
    <Grid
      templateAreas={`"nav header" "nav main" "nav graph"`}
      gridTemplateRows={'10vh 1fr'}
      gridTemplateColumns={'20vh 1fr'}
      height={'100vh'}
    >
      <GridItem height={'100vh'} area={'header'}>
        <Navbar avatar justifyContent="flex-end" />
      </GridItem>
      <GridItem background={formBackGround} area={'nav'} display={'flex'} justifyContent={'space-between'} flexDirection={'column'}>
        <Stack gap={20} paddingTop={8}>
          <Box width={12} alignSelf={'center'} display={'flex'}>
            <Image src='https://cdn-icons-png.flaticon.com/128/5564/5564318.png' alt='LOGO' />
          </Box>
          <TabsComponent />
        </Stack>
        <Center paddingBottom={20}>
          <Stack align={'center'} gap={12}>
            <Text fontSize={24}>Invest</Text>
            <Button size={'sm'} onClick={toggleColorMode} boxShadow='base' p='1' rounded='md'>
              {colorMode === 'light' ? 'Dark' : 'Light'} Theme
            </Button>
          </Stack>
        </Center>
      </GridItem>
      <Grid templateAreas={`"main graph"`}>
        <GridItem area={'main'}>
          <Box marginLeft={8} marginRight={8}>
            <PortfolioValue />
            <Actives />
          </Box>
        </GridItem>
        <GridItem area={"graph"} alignSelf={'center'} width={'50%'} justifySelf={'center'}>
          <ChartComponent chartType="PieChart" data={chartData} options={chartOptions} />
        </GridItem>
      </Grid>
    </Grid >
  );
}

export default Dashboard;
