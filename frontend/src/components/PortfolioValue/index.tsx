import { Box, Card, Text } from "@chakra-ui/react"

export const PortfolioValue = () => {

    return (
        <Box>
            <Text paddingTop={14} paddingBottom={2} paddingLeft={8} fontSize={24}>Total</Text>
            <Card flexDirection={"row"} justifyContent={'space-between'} padding={8}>
                <Text>Saldo total da carteira:</Text>
                <Text>R$ 100.204,06</Text>
            </Card>
        </Box>
    )
}