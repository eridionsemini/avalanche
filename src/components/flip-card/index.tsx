import React, {FC, ReactElement} from "react";
import FlipNumbers from 'react-flip-numbers';
import {FlipCardProps} from './types';

export const FlipCard: FC<FlipCardProps> = ({numbers, unit = '$'}): ReactElement => {
    const numberStyle = {
        fontSize: '14px',
        border: '1px solid gray',
        borderRadius: '4px',
        marginRight: '8px'
    };

    return (
        <div className='flex items-center'>
            <div className='mr-2 bg-red-600 px-1 rounded'>{unit}</div>
            <FlipNumbers height={18}
                         width={18}
                         numberStyle={numberStyle}
                         duration={5}
                         color="white"
                         background='black'
                         play
                         perspective={1000}
                         numbers={numbers}/>
        </div>
    )

}
