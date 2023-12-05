import React, {createContext, useEffect, useState} from 'react';

import {wsFallbackUrl} from "cons";

import {SocketContextProps, SocketContextValue} from './types';

export const SocketContext = createContext<SocketContextValue | null>(null);

export const SocketProvider: React.FC<SocketContextProps> = ({children}) => {

    const [socket, setSocket] = useState<WebSocket | null>(null);

    const [rakeBack, setRakeBack] = useState<number | null>(null);

    useEffect(() => {
        const newSocket = new WebSocket(process.env.REACT_APP_WEB_SOCKET_URL ?? wsFallbackUrl);

        newSocket.onopen = () => console.log('WebSocket opened');

        newSocket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                setRakeBack(data.rakeback);
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        };

        newSocket.onclose = () => console.log('WebSocket closed');

        setSocket(newSocket);

    }, []);

    return (
        <SocketContext.Provider value={{socket, rakeBack}}>
            {children}
        </SocketContext.Provider>
    );
};

