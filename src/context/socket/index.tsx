import React, { createContext, useEffect, useState } from 'react';
import {SocketContextProps,SocketContextValue} from './types';

export const SocketContext = createContext<SocketContextValue | null>(null);

export const SocketProvider: React.FC<SocketContextProps> = ({ children }) => {
    const wsEndpoint = 'ws://ec2-3-216-28-214.compute-1.amazonaws.com:4000';

    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [rakeBack, setRakeBack] = useState<number | null>(null);


    useEffect(() => {
        const newSocket = new WebSocket(process.env.REACT_APP_WEB_SOCKET_URL ?? wsEndpoint);

        newSocket.onopen = (event) => {
            console.log('WebSocket opened',event);
        };

        newSocket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                setRakeBack(data.rakeback)
            } catch (error) {
                setRakeBack(null);
                console.error('Error parsing WebSocket message:', error);
            }
        };

        newSocket.onclose = () => {
            console.log('WebSocket closed');
        };

        setSocket(newSocket);

    }, []);

    return (
        <SocketContext.Provider value={{ socket ,rakeBack }}>
            {children}
        </SocketContext.Provider>
    );
};

