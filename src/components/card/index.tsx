import React, {FC, ReactElement} from 'react';
import {ReactSVG} from "react-svg";
import blink from '../../assets/svg/blink.svg';
import {CardProps} from './types';

export const Card: FC<CardProps> = ({title, description, imageUrl, content}): ReactElement => {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        border: '1px solid gray',
        borderRadius: '10px',
        padding: '1rem'
    };

    return (
        <div style={backgroundStyle}>
            <div className='text-white flex flex-col mt-2'>
                <div className='flex items-center'>
                    <div className='mr-2 text-base font-bold'>{title}</div>
                    <div><ReactSVG src={blink}/></div>
                </div>
                <div className='text-gray-500 text-xs font-bold text-start mt-2'> {description}</div>
                <div className='mt-4'>{content}</div>
            </div>
        </div>
    )
}
