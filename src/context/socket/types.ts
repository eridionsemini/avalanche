import {ReactNode} from "react";

export interface SocketContextProps {
    children: ReactNode;
}

export interface SocketContextValue {
    socket: WebSocket | null;
    rakeBack: number | null;
}
