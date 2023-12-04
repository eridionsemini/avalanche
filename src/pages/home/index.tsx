import React, {FC, ReactElement} from "react";
import {Sidebar, FlipCard, LiveWin, Card, CardContent, Slider, Navbar} from "../../components";
import {useSocket} from "../../hooks";
import {liveWinData} from "../../data/live-win";
import bet from '../../assets/images/bet.jpg';
import card from '../../assets/images/card.png';
import {useQuery} from "@apollo/client";
import {GET_JACKPOT} from "../../queries/jackpot";

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
                <div className="p-4 rounded-lg">
                    <div className="flex gap-4 items-center mb-4">
                        <div className="w-3/5 h-48">
                            <Slider/>
                        </div>
                        <div className="w-2/5">
                            <div
                                className="flex items-center justify-center mt-20 rounded bg-gray-50 h-96 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="rounded h-40">
                            <Card title='House'
                                  imageUrl={card}
                                  description='Be the house, and earn yield'
                                  content=
                                      {
                                          <CardContent firstRowLabel='Bankroll Size'
                                                       firstRowValue='3,408,110'
                                                       secondRowLabel='Bankroll APR'
                                                       secondRowValue='3.1'/>
                                      }/>
                        </div>
                        <div className="rounded h-40">
                            <Card title='Cashback'
                                  imageUrl={card}
                                  description='Lock rakeback tokens to earn profit'
                                  content=
                                      {<CardContent firstRowLabel='Total Cashback'
                                                    firstRowValue='541,616'
                                                    secondRowLabel='Cashback ROI'
                                                    secondRowValue='7.28'/>
                                      }/>
                        </div>
                        <div className="rounded h-40">
                            <Card title='vWINR Rakeback'
                                  imageUrl={card}
                                  description='vWINR Rakeback'
                                  content={<FlipCard numbers={rakeBack ? rakeBack.toString() : ''}/>}
                            />
                        </div>
                        <div className="rounded h-40">
                            <Card title='Jackpot'
                                  imageUrl={card}
                                  description='Jackpot'
                                  content={<FlipCard numbers={jackpotData ? jackpotData.getJackpot.toString() : ''}/>}
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
