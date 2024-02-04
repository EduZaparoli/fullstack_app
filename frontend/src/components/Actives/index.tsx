import { WarningIcon } from "@chakra-ui/icons"
import { Divider, Flex, Stack, Text } from "@chakra-ui/react"

export const Actives = () => {

    return (
        <Stack paddingLeft={8} paddingRight={8} gap={8} paddingTop={24}>
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Flex align={'center'} gap={2}>
                    <WarningIcon color={'white'} background={'white'} borderRadius={10} />
                    <Text>Ações</Text>
                </Flex>
                <Text>25.051,01</Text>
            </Flex>
            <Divider />
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Flex align={'center'} gap={2}>
                    <WarningIcon color={'white'} background={'white'} borderRadius={10} />
                    <Text>Fundos Imobiliários</Text>
                </Flex>
                <Text>25.051,01</Text>
            </Flex>
            <Divider />
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Flex align={'center'} gap={2}>
                    <WarningIcon color={'white'} background={'white'} borderRadius={10} />
                    <Text>Tesouro Direto</Text>
                </Flex>
                <Text>25.051,01</Text>
            </Flex>
            <Divider />
            <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Flex align={'center'} gap={2}>
                    <WarningIcon color={'white'} background={'white'} borderRadius={10} />
                    <Text>Conta Investimento</Text>
                </Flex>
                <Text>25.051,01</Text>
            </Flex>
        </Stack>
    )
}