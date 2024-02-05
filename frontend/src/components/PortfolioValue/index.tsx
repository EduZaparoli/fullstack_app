import { WarningIcon } from "@chakra-ui/icons"
import { Box, Card, Divider, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react"

export const PortfolioValue = () => {

    const formBackGround = useColorModeValue("gray.100", "gray.700")

    return (
        <Box>
            <Text paddingTop={14} paddingBottom={2} paddingLeft={8} fontSize={24}>Total</Text>
            <Card flexDirection={"row"} justifyContent={'space-between'} bg={formBackGround} padding={8}>
                <Text>Saldo total da carteira:</Text>
                <Text>R$ 100.204,06</Text>
            </Card>
            <Stack paddingLeft={8} paddingRight={8} gap={8} paddingTop={24}>
                <Flex flexDirection={'row'} justifyContent={'space-between'}>
                    <Flex align={'center'} gap={2}>
                        <WarningIcon color={'red'} background={'red'} borderRadius={10} />
                        <Text>Ações</Text>
                    </Flex>
                    <Text>R$ 17.193,11</Text>
                </Flex>
                <Divider />
                <Flex flexDirection={'row'} justifyContent={'space-between'}>
                    <Flex align={'center'} gap={2}>
                        <WarningIcon color={'green'} background={'green'} borderRadius={10} />
                        <Text>Fundos Imobiliários</Text>
                    </Flex>
                    <Text>R$ 45.051,01</Text>
                </Flex>
                <Divider />
                <Flex flexDirection={'row'} justifyContent={'space-between'}>
                    <Flex align={'center'} gap={2}>
                        <WarningIcon color={'blue'} background={'blue'} borderRadius={10} />
                        <Text>Tesouro Direto</Text>
                    </Flex>
                    <Text>R$ 13.125,60</Text>
                </Flex>
                <Divider />
                <Flex flexDirection={'row'} justifyContent={'space-between'}>
                    <Flex align={'center'} gap={2}>
                        <WarningIcon color={'orange'} background={'orange'} borderRadius={10} />
                        <Text>Conta Investimento</Text>
                    </Flex>
                    <Text>R$ 25.051,01</Text>
                </Flex>
            </Stack>
        </Box>
    )
}