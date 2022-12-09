import { Flex, Button, Text, Heading } from '@chakra-ui/react';
import { useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

export default function Connect(){
    const { connect } = useConnect({connector: new MetaMaskConnector(),});

    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            direction={'column'}
            margin={'auto'}
        >
            <Heading
                fontSize={60}
                marginBottom={'40px'}
            >
                Web3 Chat Room
            </Heading>
            <Text
                fontSize={35}
            >
                Connect your wallet to enter
            </Text>
            <Button
                colorScheme={'pink'}
                size={'lg'}
                fontSize={'24px'}
                marginTop={'30px'}
                onClick={() => connect()}
            >
                Connect Metamask
            </Button>
        </Flex>
    );
}