import React, {FC, ReactElement} from 'react';
import {ReactSVG} from "react-svg";
import {LiveWinProps} from './types';

export const LiveWin: FC<LiveWinProps> = ({imageSrc, walletAddress, amount, currency = '$'}): ReactElement => {
    return (
        <div className='flex flex-col items-center rounded overflow-hidden'>
            <ReactSVG src={imageSrc}/>
            <div className='text-center font-bold mt-2 text-gray-500 text-xxs'>{walletAddress}</div>
            <div className='text-center mt-2 text-xs'>
                <span className='text-green-500 font-bold text-xs'>{currency}</span>
                <span className='text-green-500 ml-1 text-xs'>{amount}</span>
            </div>
        </div>
)
}
