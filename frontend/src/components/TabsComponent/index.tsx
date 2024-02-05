import { Box, Stack, Tab, TabList, Tabs, useColorModeValue } from "@chakra-ui/react"

export const TabsComponent = () => {

  const formBackGround = useColorModeValue("gray.100", "gray.600")

  return (
    <Box>
      <Tabs background={formBackGround} colorScheme='teal' align="center" >
        <Stack gap={10}>
          <TabList>
            <Tab>Início</Tab>
          </TabList>
          <TabList>
            <Tab>Ativos</Tab>
          </TabList>
          <TabList>
            <Tab>Proventos</Tab>
          </TabList>
          <TabList>
            <Tab>Histórico</Tab>
          </TabList>
        </Stack>
      </Tabs>
    </Box>
  )
}