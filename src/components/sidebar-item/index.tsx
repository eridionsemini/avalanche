import React, {FC, ReactElement} from "react";

import {ReactSVG} from "react-svg";

import {SidebarItemProps} from "./types";

export const SidebarItem: FC<SidebarItemProps> = ({
                                                      icon,
                                                      label,
                                                      hasBadge = true,
                                                      badgeLabel = 'New',
                                                      textColor = 'white'
                                                  }): ReactElement => {
    return (
        <div
            className={`flex items-center justify-between p-2 text-${textColor} font-bold rounded-lg hover:bg-gray-700 hover:cursor-pointer group`}>
            <div className='flex items-center'>
                <ReactSVG src={icon}/>
                <span className="ms-3 ml-4">{label}</span>
            </div>
            {hasBadge ? <span className='text-yellow-500 uppercase text-xs'>{badgeLabel}</span> : <span/>}
        </div>
    )
}
