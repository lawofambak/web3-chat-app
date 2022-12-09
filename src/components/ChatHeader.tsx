import { Box, Text, Button } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

type ChatHeaderProps = {
    address: string | undefined
    username: string
    leave: () => void
};

export default function ChatHeader({ address, username, leave }: ChatHeaderProps) {
    return(
        <Box
            display={'inline-block'}
            alignItems={'center'}
            margin={'20px'}
            width={'75vh'}
        >
            <Text
                float={'left'}
                width={'85%'}
                fontSize={'25px'}
            >
                {username}
                <ArrowRightIcon 
                    boxSize={'25px'}
                    color={'green.200'}
                />
                {address &&
                `${address.slice(0, 4)}...${address.slice(
                    address.length - 4,
                    address.length
                )}`}
            </Text>
            <Button
               float={'right'}
               width={'15%'}
               colorScheme={'orange'}
               onClick={() => leave()}
            >
                Leave
            </Button>
        </Box>
    );
};