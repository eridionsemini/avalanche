import React, {FC, ReactElement} from "react";

import {ReactSVG} from "react-svg";

import {SidebarItem} from 'components';

import {sidebar} from "data/sidebar";

import applePay from 'assets/svg/sidebar/apple-pay.svg';
import arrow from 'assets/svg/sidebar/arrow.svg';
import crypto from 'assets/svg/sidebar/crypto.svg';
import googlePay from 'assets/svg/sidebar/google-pay.svg';
import masterCard from 'assets/svg/sidebar/master-card.svg';
import coin from 'assets/svg/sidebar/shiny-coin.svg';
import visa from 'assets/svg/sidebar/visa.svg';

export const Sidebar: FC = (): ReactElement => {
    return (
            <aside id="cta-button-sidebar"
                   className="fixed top-20 left-0 z-20 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="px-3 py-4 flex flex-col justify-between h-full overflow-y-auto bg-black">
                    <div>
                        <div className='flex items-center'>
                            <ReactSVG src={coin}/>
                            <div className='ml-2'>
                                <div className='text-white text-sm font-bold'>WINR Coin</div>
                                <div className='text-zinc-500 text-sm font-bold mt-1'>$0.058182</div>
                            </div>
                        </div>
                        <div className='text-zinc-500 font-bold uppercase mb-2 mt-2'>Games</div>
                        <div className="space-y-2 font-medium">
                            {sidebar.map((s, key) => (
                                <SidebarItem icon={s.icon} label={s.label} key={key.toString()}/>
                            ))}
                        </div>
                        <div className='py-2 ml-2 flex items-center justify-between'>
                            <div className='text-zinc-500 text-sm font-bold uppercase'>More</div>
                            <ReactSVG src={arrow} className='mr-2'/>
                        </div>
                        <SidebarItem icon={crypto} textColor='green-500' label='Crypto Futures' hasBadge={false}/>
                    </div>
                    <div className='h-40'>
                        <div className='text-orange-700 text-sm font-bold rounded bg-yellow-500 flex items-center cursor-pointer justify-center p-2 ml-2 mr-2 uppercase'>
                            But Crypto
                        </div>
                        <div className='mt-2 p-2 flex items-center justify-between cursor-pointer'>
                            <ReactSVG src={visa}/>
                            <ReactSVG src={masterCard}/>
                            <ReactSVG src={applePay}/>
                            <ReactSVG src={googlePay}/>
                        </div>
                    </div>
                </div>
            </aside>
    )
}
