import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import ChatMessage from './ChatMessage';

type MessageContent = {
    name: string
    id: string
    message: string
};

type ChatBoxProps = {
    username: string
    userid: string
    chatcontent: MessageContent[]
};

export default function ChatBox({ username, userid, chatcontent }: ChatBoxProps) {
    // State
    const [message, setMessage] = useState<string>('');

    // Send message
    const sendMessage = async () => {
        if (message) {
            const newUserMessage: MessageContent = {
                name: username,
                id: userid,
                message
            };

            const resp = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUserMessage),
            });

            if (resp.ok) setMessage('');
        }
    };

    return (
        <>
            <Box
                bg={'purple.600'}
                width={'auto'}
                margin={'5px 20px'}
                height={'75%'}
                borderRadius={'2xl'}
                overflow={'auto'}
            >
                {chatcontent.map((chat, index) => {return(
                    <ChatMessage key={index} chat={chat} userid={userid} />
                );})}
            </Box>
            <Box
              width={'auto'}
              margin={'20px'}
              display={'flex'}
            >
                <Input
                    width={'85%'}
                    color={'#322659'}
                    type={'text'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => {
						if (e.key === "Enter") {
							sendMessage();
						}
					}}
                />
                <Button
                    width={'15%'}
                    colorScheme={'purple'}
                    onClick={sendMessage}
                >
                    Send
                </ Button>
            </Box>
        </>
    );
};