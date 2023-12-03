import {HTMLProps} from "react";

export interface SidebarItemProps extends HTMLProps<HTMLDivElement> {
    icon: string;
    label: string;
    hasBadge?: boolean;
    badgeLabel?: string;
}
