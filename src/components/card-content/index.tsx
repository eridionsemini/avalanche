import React, {FC, ReactElement} from "react";
import {CardContentProps} from './types';

export const CardContent: FC<CardContentProps> = ({
                                                      firstRowLabel,
                                                      firstRowValue,
                                                      secondRowLabel,
                                                      secondRowValue,
                                                      firstRowUnit = '$',
                                                      secondRowUnit = '%'
                                                  }): ReactElement => {
    return (
        <div>
            <div className='flex items-center text-sm justify-between'>
                <div className='font-bold'>{firstRowLabel}</div>
                <div>
                    <span className='font-bold'>{firstRowValue}</span>
                    <span className='ml-1 font-extrabold  text-gray-500'>{firstRowUnit}</span>
                </div>
            </div>
            <div className='flex items-center text-sm justify-between mt-2'>
                <div className='font-bold'>{secondRowLabel}</div>
                <div>
                    <span className='font-bold'>{secondRowValue}</span>
                    <span className='ml-1 font-extrabold text-gray-500'>{secondRowUnit}</span>
                </div>
            </div>
        </div>
    )
}
