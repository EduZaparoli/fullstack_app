import { Button, Center, Flex, Grid, GridItem, Image, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AuthStore } from "../../stores/AuthStore";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { TabsComponent } from "@/components/TabsComponent";

interface IProps {
    children: React.ReactNode;
}

export const ResponsiveLayout = ({ children }: IProps) => {

    const { isAuthenticated, logout } = new AuthStore();
    const router = useRouter();
    const formBackGround = useColorModeValue("gray.100", "gray.600")
    const { colorMode, toggleColorMode } = useColorMode()

    if (!isAuthenticated) {
        router.push('/auth/login');
    }

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
            <GridItem background={formBackGround} area={'nav'} display={'flex'} justifyContent={'space-between'} flexDirection={'column'} paddingTop={26.9}>
                <Stack gap={20}>
                    <Flex alignSelf={'center'}>
                        <Image src='https://cdn-icons-png.flaticon.com/128/5564/5564318.png' alt='LOGO' width={12} />
                    </Flex>
                    <TabsComponent />
                </Stack>
                <Center paddingBottom={20}>
                    <Stack align={'center'} gap={12}>
                        <Text fontSize={24}>Invest</Text>
                        <Stack gap={3}>
                            <Button size={'sm'} onClick={toggleColorMode} boxShadow='base' p='1' rounded='md'>
                                {colorMode === 'light' ? 'Dark' : 'Light'} Theme
                            </Button>
                            <Button size={'sm'} onClick={userLogout} boxShadow='base' paddingLeft={8} paddingRight={8} rounded='md'>
                                Sair
                            </Button>
                        </Stack>
                    </Stack>
                </Center>
            </GridItem>
            {children}
        </Grid >
    )
}