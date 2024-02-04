import { Box, Stack, Tab, TabList, Tabs, useColorModeValue } from "@chakra-ui/react"

export const TabsComponent = () => {

  const formBackGround = useColorModeValue("gray.100", "gray.600")

  return (
    <Box>
      <Tabs background={formBackGround} colorScheme='teal' align="center" >
        <Stack gap={10}>
          <TabList>
            <Tab>Dashboad</Tab>
          </TabList>
          <TabList>
            <Tab>Actives</Tab>
          </TabList>
          <TabList>
            <Tab>Earnings</Tab>
          </TabList>
          <TabList>
            <Tab>History</Tab>
          </TabList>
        </Stack>
      </Tabs>
    </Box>
  )
}