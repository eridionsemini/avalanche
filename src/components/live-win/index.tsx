import React, {FC, ReactElement} from 'react';
import {ReactSVG} from "react-svg";
import {LiveWinProps} from './types';

export const LiveWin: FC<LiveWinProps> = ({imageSrc, walletAddress, amount, currency = '$'}): ReactElement => {
    return (
        <div className='flex flex-col items-center'>
         <ReactSVG src={imageSrc}/>
            <div className='text-center font-bold mt-2 text-gray-500 text-xs'>{walletAddress}</div>
            <div className='text-center text-green-500 mt-2'>
                {amount}
            </div>
        </div>
    )
}
