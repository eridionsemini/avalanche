import React, {FC, ReactElement} from "react";
import {HomeProps} from "./types";

export const Home: FC<HomeProps> = ({title}): ReactElement => {

    return (
        <div>
            {title}
        </div>
    )
}


