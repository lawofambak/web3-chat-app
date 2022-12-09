import { Flex } from '@chakra-ui/react';
import ChatHome from '../components/ChatHome';

export default function Home() {
  return (
    <Flex
      bg={'#553C9A'}
      height={'100vh'}
    >
      <ChatHome />
    </Flex>
  );
};
