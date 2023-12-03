import React, {FC, ReactElement} from "react";
import {SidebarItemProps} from "./types";
import {ReactSVG} from "react-svg";

export const SidebarItem: FC<SidebarItemProps> = ({icon, label, hasBadge = true, badgeLabel = 'New'}): ReactElement => {
    return (
        <li>
            <div
                className="flex items-center justify-between p-2 text-white rounded-lg hover:bg-cyan-500 hover:cursor-pointer group">
                <div className='flex items-center'>
                    <ReactSVG src={icon}/>
                    <span className="ms-3 ml-4">{label}</span>
                </div>
                {hasBadge ? <span className='text-yellow-500 uppercase text-xs'>{badgeLabel}</span> : <span/>}
            </div>
        </li>
    )
}
