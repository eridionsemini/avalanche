import React, {FC, ReactElement} from "react";
import {useQuery} from "@apollo/client";
import {GET_JACKPOT} from "../../queries/jackpot";
import {JackPotProps} from './types';

export const JackPot: FC<JackPotProps> = ({pollInterval = 10000}): ReactElement => {
    const {loading: jackpotLoading, error: jackpotError, data: jackpotData} = useQuery(GET_JACKPOT, {
        pollInterval: pollInterval,
        refetchWritePolicy: 'overwrite'
    });

    console.log({jackpotLoading, jackpotError, jackpotData});


    return (
        <div>
            JackPot {jackpotData?.getJackpot}
        </div>
    )
}
