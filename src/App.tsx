import React, {ReactElement} from 'react';

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {DynamicContextProvider, SortWallets} from "@dynamic-labs/sdk-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {SocketProvider} from "context";
import {Home, Profile} from "pages";

import {environmentId} from "cons";

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

function App(): ReactElement {
    return (
        <SocketProvider>
            <DynamicContextProvider
                settings={{
                    environmentId: environmentId,
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
                    <BrowserRouter>
                        <Routes>
                            <Route path='*' element={<Home/>}/>
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                        </Routes>
                    </BrowserRouter>
                </ApolloProvider>
            </DynamicContextProvider>
        </SocketProvider>
    );
}

export default App;
