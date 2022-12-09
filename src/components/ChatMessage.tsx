import { Flex, Box, Text } from '@chakra-ui/react';
import ChatUser from './ChatUser';

type MessageContent = {
    name: string
    id: string
    message: string
};

type ChatMessageProps = {
    chat: MessageContent
    userid: string
};

export default function ChatMessage({ chat, userid }: ChatMessageProps) {
    const userColor = chat.id === userid ? 'pink.500' : 'orange.400';

    const messageLocation = chat.id === userid ? 'flex-end' : 'flex-start';

    return (
        <>
            <Flex
                justifyContent={'flex-end'}
            >
                {chat.id !== userid && (
                    <ChatUser username={chat.name} />
                )}
                <Flex
                    bgColor={userColor}
                    margin={'3'}
                    borderRadius={'2xl'}
                    width={'55%'}
                    padding={'15px'}
                    justifyContent={messageLocation}
                >
                    {chat.message}
                </Flex>
            </Flex>
        </>
    );
};