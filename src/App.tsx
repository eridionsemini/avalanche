import React from 'react';
import {InMemoryCache, ApolloClient, ApolloProvider} from "@apollo/client";
import {DynamicContextProvider, SortWallets} from "@dynamic-labs/sdk-react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {DAppProvider} from '@usedapp/core';

import {SocketProvider} from "./context";
import {Home, Profile} from "./pages";
import './App.css';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                jackpot: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
            },
        },
    },
});


const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_API_URL,
    cache,
    connectToDevTools: process.env.NODE_ENV === 'development'
})
const config = {
    readOnlyChainId: 1,
    autoConnect: false,
    pollingInterval: 15000,
}

function App() {
    return (
        <SocketProvider>
            <DAppProvider config={config}>
                <DynamicContextProvider
                    settings={{
                        environmentId: "f0b977d0-b712-49f1-af89-2a24c47674da",
                        walletsFilter: SortWallets(["metamask", "coinbase", "rainbow"]),
                        defaultNumberOfWalletsToShow: 3,
                        eventsCallbacks: {
                            onLinkSuccess: (args) => {
                                console.log('link success', args)
                            },
                            onAuthSuccess: (args) => {
                                console.log('auth success', args)
                            },
                            onLogout: (args) => {
                                console.log('logout success', args)
                            },
                        },
                    }}
                >
                    <ApolloProvider client={client}>
                        <div className="App">
                            <BrowserRouter>
                                <Routes>
                                    <Route path='*' element={<Home/>}/>
                                    <Route path='/home' element={<Home/>}/>
                                    <Route path='/profile' element={<Profile/>}/>
                                </Routes>
                            </BrowserRouter>
                        </div>
                    </ApolloProvider>
                </DynamicContextProvider>
            </DAppProvider>
        </SocketProvider>
    );
}

export default App;
