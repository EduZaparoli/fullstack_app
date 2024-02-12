import { Box, Stack, Tab, TabList, Tabs, useColorModeValue } from "@chakra-ui/react"
import Link from "next/link"

interface IProps {
  page: number;
}

export const TabsComponent = ({ page }: IProps) => {

  const formBackGround = useColorModeValue("gray.100", "gray.600")

  return (
    <Box>
      <Tabs index={page} background={formBackGround} colorScheme='teal' align="center" >
        <Stack gap={10}>
          <TabList>
            <Tab>
              <Link href={'/dashboard'}>
                Início
              </Link>
            </Tab>
          </TabList>
          <TabList>
            <Tab>
              <Link href={'/actives'}>
                Ativos
              </Link>
            </Tab>
          </TabList>
          <TabList>
            <Tab>
              <Link href={'/earnings'}>
                Proventos
              </Link>
            </Tab>
          </TabList>
          <TabList>
            <Tab>
              <Link href={'/history'}>
                Histórico
              </Link>
            </Tab>
          </TabList>
        </Stack>
      </Tabs>
    </Box>
  )
}