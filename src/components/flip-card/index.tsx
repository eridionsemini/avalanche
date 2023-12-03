import React, {FC, ReactElement} from "react";
import FlipNumbers from 'react-flip-numbers';
import {FlipCardProps} from './types';

export const FlipCard: FC<FlipCardProps> = ({numbers}): ReactElement => {
    const numberStyle = {
        fontSize: '14px'
    };

    return <FlipNumbers height={24}
                        width={24}
                        numberStyle={numberStyle}
                        duration={5}
                        color="white"
                        background='black'
                        play
                        perspective={1000}
                        numbers={numbers}/>;

}
