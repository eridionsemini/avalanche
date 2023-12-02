import React, {FC, ReactElement} from "react";
import {useQuery} from '@apollo/client';

import {GET_JACKPOT} from "../../queries/jackpot";
import {useSocket} from "../../hooks";
import {HomeProps} from "./types";

export const Home: FC<HomeProps> = ({title}): ReactElement => {
    const {loading: jackpotLoading, error: jackpotError, data: jackpotData} = useQuery(GET_JACKPOT);
    const {socket,rakeBack} = useSocket();
    console.log({jackpotLoading, jackpotError, jackpotData,socket,rakeBack});

    return (
        <div>
            {title} {rakeBack}
        </div>
    )
}


