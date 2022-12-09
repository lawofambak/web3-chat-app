import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Connect from './Connect';
import Login from './Login';
import { useAccount } from 'wagmi';

export default function ChatHome(){
    // State
    const [_isConnected, _setIsConnected] = useState<boolean>(false);

    // Get address and connection (wagmi)
    const { address, isConnected } = useAccount();

    /** 
    *  Effect
    *  Have to set connected state by myself and then update those
    *  states after component is mounted for hydration error
    */
    useEffect(() => {
        _setIsConnected(isConnected);
      }, [isConnected]);  

    return (
        <Flex
            bg={'#9F7AEA'}
            color={'white'}
            fontWeight={'bold'}
            margin={'auto'}
            height={'85vh'}
            width={'80vh'}
            borderRadius={'2xl'}
        >
            {_isConnected ? (<Login address={ address } />) : (<Connect />)}
        </Flex>
    );
};