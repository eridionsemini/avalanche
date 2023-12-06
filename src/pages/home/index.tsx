import React, {FC, ReactElement} from "react";

import {useQuery} from "@apollo/client";

import {useSocket} from "hooks";

import {Bar, Card, CardContent, FlipCard, LiveWin, Navbar, Sidebar, Slider, Wager} from "components";

import {GET_JACKPOT} from "queries/jackpot";

import {liveWinData} from "data/live-win";

import bet from 'assets/images/bet.jpg';
import card from 'assets/images/card.png';

export const Home: FC = (): ReactElement => {
    const {rakeBack} = useSocket();
    const {data: jackpotData} = useQuery(GET_JACKPOT, {
        pollInterval: 10000,
    });

    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className="p-4 sm:ml-64">
                <div className="p-4 bg-gray-900 rounded-lg mt-40">
                    <div className="flex gap-4 items-center mb-4">
                        <div className="w-4/5 h-48">
                            <Slider/>
                        </div>
                        <div className="w-1/5 mb-4 rounded">
                            <Wager/>
                        </div>
                    </div>
                    <Bar/>
                    <div className="grid grid-cols-4 gap-3">
                        <div className="rounded min-h-40">
                            <Card title='House'
                                  imageUrl={card}
                                  description='Be the house, and earn yield'
                                  content=
                                      {
                                          <CardContent
                                              firstRowLabel='Bankroll Size'
                                              firstRowValue='3,408,110'
                                              secondRowLabel='Bankroll APR'
                                              secondRowValue='3.1'/>
                                      }/>
                        </div>
                        <div className="rounded min-h-40">
                            <Card title='Cashback'
                                  imageUrl={card}
                                  description='Lock rakeback tokens to earn profit'
                                  content=
                                      {<CardContent
                                          firstRowLabel='Total Cashback'
                                          firstRowValue='541,616'
                                          secondRowLabel='Cashback ROI'
                                          secondRowValue='7.28'/>
                                      }/>
                        </div>
                        <div className="rounded min-h-40">
                            <Card
                                title='vWINR Rakeback'
                                imageUrl={card}
                                description='vWINR Rakeback'
                                content={<FlipCard numbers={rakeBack !== null ? rakeBack.toString() : ''}/>}
                            />
                        </div>
                        <div className="rounded min-h-40">
                            <Card
                                title='Jackpot'
                                imageUrl={card}
                                description='Jackpot'
                                content={<FlipCard
                                    numbers={jackpotData !== undefined ? jackpotData.getJackpot.toString() : ''}/>}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-48  mt-4 mb-4 overflow-hidden rounded">
                        <img src={bet} alt='bet' className='w-full rounded'/>
                    </div>
                    <div className='flex items-center justify-between'>
                        {liveWinData.map((liveWin) => (
                            <LiveWin
                                imageSrc={liveWin.imageSrc}
                                walletAddress={liveWin.walletAddress}
                                amount={liveWin.amount}
                                key={liveWin.id.toString()}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
