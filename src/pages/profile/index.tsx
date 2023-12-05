import React, {FC, ReactElement} from "react";
import {useDynamicContext} from "@dynamic-labs/sdk-react";
import {useNavigate} from 'react-router-dom';

export const Profile: FC = (): ReactElement => {
    const {
        primaryWallet,
        connectedWallets,
        handleUnlinkWallet,
        handleLogOut,
        setShowAuthFlow,
        isAuthenticated,
    } = useDynamicContext();

    const navigate = useNavigate();

    const unLink = (id: string) => {
        (handleUnlinkWallet(id) as Promise<void>)
            .then((res: any) =>
                console.log("res", res, "connected wallets", connectedWallets)
            )
            .catch((err: any) => console.log("err", err));
    }

    return (
        <div className="m-auto w-2/4 mt-20 self-center border border-zinc-500 px-2 py-4 rounded">
            <div className='text-white font-bold text-xs cursor-pointer mb-4' onClick={() => navigate('/home')}>
                Back to home
            </div>
            <div className='flex flex-col'>
                <div className='text-white text-center uppercase font-extrabold'>
                    Profile
                </div>
                {connectedWallets && connectedWallets.length > 0 && (
                    <>
                        <div className='text-white font-bold text-center mt-8'>Connected Wallets</div>
                        <div className='mt-8'>
                            {connectedWallets.map((wallet) => (
                                <div key={wallet.address}
                                     className="flex items-center justify-between py-4 px-1 rounded bg-gray-700 w-full">
                                    <div className='flex items-center text-white text-sm font-bold'>
                                        <div className="">{wallet.address}</div>
                                        <div className="ml-2">{wallet.chain}</div>
                                    </div>

                                    <div
                                        className="bg-green-500 rounded-md text-white font-bold text-sm px-2 cursor-pointer"
                                        onClick={() => unLink(wallet.id)}
                                    >
                                        Unlink
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <div className="m-auto mt-4 px-2 font-bold text-white text-sm bg-green-500 rounded-md cursor-pointer"
                     onClick={isAuthenticated && primaryWallet ? () => handleLogOut() : () => setShowAuthFlow(true)}>
                    {isAuthenticated && primaryWallet ? <span> Logout</span> : <span>Login</span>}
                </div>
            </div>
        </div>
    );
}
