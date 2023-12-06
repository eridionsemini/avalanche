import {useContext} from "react";

import {SocketContext} from "context";
import {SocketContextValue} from "context/socket/types";

export const useSocket = (): SocketContextValue => {
    const context = useContext(SocketContext);

    if (!context) {
        console.error('useSocket: SocketProvider or socket not available or not open.');
        return {socket: null, rakeBack: null};
    }

    if (!context.socket) {
        return {socket: null, rakeBack: context.rakeBack}
    }

    return context;
};
