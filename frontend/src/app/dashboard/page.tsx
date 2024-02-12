"use client"
import { Box, Card, Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import { PortfolioValue } from "@/components/PortfolioValue";
import { ResponsiveLayout } from "@/components/ResponsiveLayout";
import { ChartComponent } from "@/components/ChartComponent";

const Dashboard = () => {

  const formBackGround = useColorModeValue("gray.100", "transparent")

  const chartData = [
    ["Actives", "Value"],
    ["Ações", 17193.11],
    ["Fundos Imobiliários", 45051.01],
    ["Tesouro Direto", 13125.60],
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
    slices: {
      0: { color: 'red' },
      1: { color: 'green' },
      2: { color: 'blue' },
      3: { color: 'orange' },
    },
    tooltip: { textStyle: { color: 'teal' }, showColorCode: true, trigger: 'selection' },
    pieSliceBorderColor: 'none',
  };

  return (
    <ResponsiveLayout page={0}>
      <Grid
        templateColumns={'repeat(2, 1fr)'}
        gap={8}
        justifyItems={'center'}
        alignItems={'center'}
        marginLeft={8}
        marginRight={8}
        height={'70%'}
      >
        <Box width={'100%'} height={'100%'}>
          <PortfolioValue />
        </Box>
        <Flex width={'100%'} height={'100%'} justify={'center'} align={'center'}>
          <Card bg={formBackGround} width={'100%'} height={'84%'} justify={'center'} align={'center'} marginTop={24} variant={'outline'}>
            <ChartComponent chartType="PieChart" data={chartData} options={chartOptions} />
          </Card>
        </Flex>
      </Grid>
    </ResponsiveLayout>
  );
}

export default Dashboard;
