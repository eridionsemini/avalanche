import {ReactNode} from "react";

export interface CardProps {
    title: string;
    description: string;
    content: ReactNode;
    imageUrl:string;
}
