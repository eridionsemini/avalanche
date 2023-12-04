import React, {FC, ReactElement} from "react";
import {ReactSVG} from "react-svg";
import dice from '../../assets/svg/bar/dice.svg';
import volume from '../../assets/svg/bar/volume.svg';
import slider from '../../assets/svg/bar/slider.svg';

export const Bar: FC = (): ReactElement => {
    return (
        <div className='px-8 py-4 bg-gray-600 mb-4 rounded-b-md	flex items-center justify-between'>
            <div className='flex items-center'>
             <ReactSVG src={dice}/>
                <div className='ml-2 text-white text-sm font-bold'>Range</div>
                <div className='ml-2 font-bold text-gray-800 text-md'>HOW TO PLAY?</div>
            </div>
            <div className='flex items-center'>
                <ReactSVG src={volume} className='mr-2'/>
                <ReactSVG src={slider}/>
            </div>
        </div>
    )
}
