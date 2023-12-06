import React, {FC, ReactElement, useState} from "react";

import {useMutation} from "@apollo/client";
import {useDynamicContext} from "@dynamic-labs/sdk-react";
import {ABI,walletAddress} from "cons";
import {Contract, Signer, utils} from 'ethers';
import {ReactSVG} from "react-svg";

import {UPDATE_RAKE_BACK} from "mutations/rakeback";

import question from 'assets/svg/question.svg';
import arrow from 'assets/svg/sidebar/arrow.svg';

export const Wager: FC = (): ReactElement => {
    const [wager, setWager] = useState<number>(0);
    const [multipleBets, setMultipleBets] = useState<number>(0);
    const [updateRakeback] = useMutation(UPDATE_RAKE_BACK, {
        variables: {
            addRakeback: utils.parseEther((wager * multipleBets).toString())
        }
    })

    const {isAuthenticated, primaryWallet} = useDynamicContext();

    const deposit = async () => {
        if (!primaryWallet) {
            return;
        }
        const signer = await primaryWallet.connector.getSigner() as Signer;

        const contractInterface = new utils.Interface(ABI);

        try {
            const contract = new Contract(walletAddress, contractInterface, signer);
            const value = utils.parseEther((wager * multipleBets).toString());
            const tx = await contract['transfer'](walletAddress, value);
            await tx.wait();
            console.log('tx res', tx);
            await updateRakeback();
        } catch (e) {
            console.log(e);
        }
    }

    const disabled = !isAuthenticated || !primaryWallet || wager === 0 || multipleBets === 0;

    return (
        <div className='flex flex-col'>
            <label htmlFor="wager-input"
                   className="mb-1 text-sm flex font-bold text-zinc-500">
                <div className='flex items-center w-full justify-between'>
                    <div>Wager</div>
                    <div>
                        <span className='text-white font-bold'>${wager}</span>
                        <span className='ml-1'>wETH</span>
                    </div>
                </div>
            </label>
            <input type="number" id="wager-input"
                   aria-describedby="helper-text-explanation"
                   value={wager}
                   onChange={(e) => setWager(Number(e.target.value))}
                   className="w-full bg-black border outline-none font-bold border-zinc-400 text-white text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block p-2.5"
                   placeholder=""/>
            <div className='mt-4 flex flex-center gap-2 text-white text-sm font-bold cursor-pointer'>
                <div className='bg-zinc-500 px-3 py-1 rounded'>1/3</div>
                <div className='bg-zinc-500 px-3 py-1 rounded'>2X</div>
                <div className='bg-red-500 px-3 py-1 rounded'>Max</div>
            </div>

            <label htmlFor="multiple-bets-input"
                   className="mb-1 mt-4 text-sm flex font-bold text-zinc-500">
                <div className='flex items-center'>
                    Multiple Bets <ReactSVG src={question} className='ml-1'/>
                </div>
            </label>
            <input type="number" id="multiple-bets-input"
                   aria-describedby="helper-text-explanation"
                   value={multipleBets}
                   onChange={(e) => setMultipleBets(Number(e.target.value))}
                   className="bg-black w-full border outline-none font-bold border-zinc-400 text-white text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block p-2.5"
                   placeholder=""/>

            <div className='flex items-center'>
                <div>
                    <label htmlFor="max-payout"
                           className="mb-1 mt-4 text-sm flex font-bold text-zinc-500">
                        Max Payout
                    </label>
                    <input type="number" id="max-payout"
                           aria-describedby="helper-text-explanation"
                           value={0}
                           disabled
                           className="bg-black w-2/3 border outline-none font-bold border-zinc-400 text-white text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block p-2.5"
                           placeholder=""/>
                </div>
                <div className='flex flex-col items-end'>
                    <label htmlFor="total-payout"
                           className="mb-1 mt-4 text-sm flex font-bold text-zinc-500">
                        Total Wager
                    </label>
                    <input type="number" id="total-payout"
                           aria-describedby="helper-text-explanation"
                           value={0}
                           disabled
                           className="bg-black w-2/3 border outline-none font-bold border-zinc-400 text-white text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block p-2.5"
                           placeholder=""/>
                </div>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <div className='flex item-center'>
                    <div className='text-white text-sm font-bold'>Advanced</div>
                    <ReactSVG src={arrow} className='ml-1 mt-1'/>
                </div>
                <div className='h-1 bg-zinc-700 w-2/4 rounded'/>
            </div>
            <button
                disabled={disabled}
                onClick={deposit}
                className={`rounded border border-zinc-400 flex items-center px-4 py-2 justify-center cursor-pointer mt-4 ${disabled ? 'bg-zinc-600' : 'bg-green-700'} w-full`}>
                <span className='uppercase font-bold text-sm text-white'>Deposit</span>
            </button>
        </div>
    )
}
