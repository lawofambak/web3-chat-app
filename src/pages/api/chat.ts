import type { NextApiRequest } from 'next';
import type { NextApiResponseServerIO } from '../../types/next';

export default function ChatHandler(
    req: NextApiRequest,
    res: NextApiResponseServerIO
) {
    if (req.method === 'POST') {
        // Get message content
        const message = req.body;

        // Emit new message to server
        res?.socket?.server?.io?.emit('message', message);

        // Send message as JSON response
        res.status(201).json(message);
    }
};