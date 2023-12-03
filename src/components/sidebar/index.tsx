import React, {FC, ReactElement} from "react";
import {SidebarItem} from '..'
import {sidebar} from "../../data/sidebar";

export const Sidebar: FC = (): ReactElement => {
    return (
        <div>
            <aside id="cta-button-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-black">
                    <ul className="space-y-2 font-medium">
                        {sidebar.map((s,key)=>(
                            <SidebarItem icon={s.icon} label={s.label} key={key.toString()}/>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    )
}
