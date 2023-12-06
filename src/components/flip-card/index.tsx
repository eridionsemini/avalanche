import React, {FC, ReactElement, useEffect, useId} from "react";

import FlipNumbers from 'react-flip-numbers';

import {FlipCardProps} from './types';

export const FlipCard: FC<FlipCardProps> = ({numbers, unit = '$'}): ReactElement => {
    const numberStyle = {
        fontSize: '14px',
        border: '1px solid gray',
        borderRadius: '4px',
        marginRight: '8px',
    };

    const id = useId();

    useEffect(() => {
        const parentDiv = document.getElementById(id);
        if (parentDiv !== null) {
            const sectionElement = parentDiv.querySelector('section');
            if (sectionElement !== null) {
                sectionElement.style.gap = '4px';
            }
        }
    }, [id])

    return (
        <div id={id} className='flex items-center'>
            <div className='mr-2 bg-red-600 px-1 rounded'>{unit}</div>
            <FlipNumbers
                height={18}
                width={18}
                numberStyle={numberStyle}
                nonNumberStyle={{gap: '4px'}}
                duration={5}
                color="white"
                background='black'
                play
                perspective={1000}
                numbers={numbers}/>
        </div>
    )

}
