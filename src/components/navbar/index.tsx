import React, {FC, ReactElement} from "react";
import {useDynamicContext} from "@dynamic-labs/sdk-react";
import {ReactSVG} from "react-svg";
import {useNavigate} from "react-router-dom";
import logo from '../../assets/svg/navbar/logo.svg';
import bet from '../../assets/svg/navbar/bet.svg';
import user from '../../assets/svg/navbar/user.svg';
import message from '../../assets/svg/navbar/message.svg';

export const Navbar: FC = (): ReactElement => {
    const {
        isAuthenticated,
        primaryWallet,
        setShowAuthFlow,
    } = useDynamicContext();

    const navigate = useNavigate();

    return (
        <div className='fixed top-0 left-0 p-4 flex items-center justify-between w-full h-20 z-40 bg-gray-800'>
            <div className='flex item-center'>
                <ReactSVG src={logo}/>
                <ReactSVG src={bet} className='ml-4'/>
            </div>
            <div className='flex item-center cursor-pointer'>
                <div className='bg-black px-4 py-2 rounded'
                     onClick={isAuthenticated ? () => navigate('/profile') : () => setShowAuthFlow(true)}>
                    {isAuthenticated && primaryWallet ?
                        <div className='text-white text-xs font-extrabold'>{primaryWallet.address}</div> :
                        <ReactSVG src={user}/>}
                </div>
                <div className='ml-4 bg-black px-4 py-2 rounded'>
                    <ReactSVG src={message}/>
                </div>
            </div>
        </div>

    )
}
