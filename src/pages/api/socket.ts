import type { NextApiRequest } from 'next';
import type { NextApiResponseServerIO } from '../../types/next';
import { Server as NetServer } from 'http';
import { Server as ServerIO } from 'socket.io';

export default function SocketHandler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  // Check if socket connection already exists
  if (!res.socket.server.io) {
    console.log('New Socket...')
    
    // Plug HTTP server to Socket.io
    const httpServer: NetServer = res.socket.server as any;

    // Instantiate new server by starting a new socket connection
    const io = new ServerIO(httpServer, {path: '/api/socket'});

    // To check for new requests
    res.socket.server.io = io;
  }

  // End request
  res.end()
};
