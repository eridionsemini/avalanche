import React, {FC, ReactElement, useState} from "react";

import './slider.css';

import ReactSlider from "react-slider";
import {ReactSVG} from "react-svg";

import switchIcon from 'assets/svg/switch.svg';

const min = 0;
const max = 100;
const multiplier = 1.96;

export const Slider: FC = (): ReactElement => {
    const [value, setValue] = useState<number>(50);

    return (
        <>
            <div className='text-white'>
                <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    step={1}
                    onChange={setValue}
                    renderThumb={(props, state) => <div  {...props}>{state.valueNow}</div>}
                    min={min}
                    max={max}
                    value={value}/>

            </div>
            <div className='mt-20 w-3/4 flex m-auto items-center justify-evenly'>
                <div>
                    <label htmlFor="roll-input"
                           className="mb-1 text-sm flex items-center font-bold font-medium text-zinc-500">
                        Roll Under
                        <ReactSVG src={switchIcon} className='ml-2 cursor-pointer' onClick={() => setValue(max - value)}/>
                    </label>
                    <input type="number" id="roll-input"
                           aria-describedby="helper-text-explanation"
                           value={value}
                           onChange={(e) => setValue(Number(e.target.value))}
                           className="bg-black border outline-none font-bold border-zinc-400 text-white text-sm rounded-lg w-3/4 focus:ring-zinc-500 focus:border-zinc-500 block p-2.5"
                           placeholder=""/>
                </div>
                <div>
                    <label htmlFor="win-input"
                           className="mb-1 text-sm block font-bold font-medium text-zinc-500">Win Chance</label>
                    <input type="number" id="win-input"
                           aria-describedby="helper-text-explanation"
                           value={max - value}
                           onChange={(e) => setValue(max - Number(e.target.value))}
                           className="bg-black border outline-none font-bold border-zinc-400 text-white text-sm rounded-lg w-3/4 focus:ring-zinc-500 focus:border-zinc-500 block p-2.5"
                           placeholder=""/>
                </div>
                <div>
                    <label htmlFor="multiplier-input"
                           className="mb-1 text-sm block font-bold font-medium text-zinc-500">Multiplier</label>
                    <input type="number" id="multiplier-input"
                           aria-describedby="helper-text-explanation"
                           disabled
                           value={multiplier}
                           className="bg-zinc-600 border outline-none font-bold border-zinc-400 text-white text-sm rounded-lg block w-3/4 p-2.5"
                           placeholder=""/>
                </div>
            </div>
        </>
    )
}
