import React from 'react';

import './App.css';

import {ApolloClient, ApolloProvider,InMemoryCache} from "@apollo/client";
import {DynamicContextProvider, SortWallets} from "@dynamic-labs/sdk-react";
import {BrowserRouter, Route,Routes} from "react-router-dom";

import {Home, Profile} from "pages";

import {SocketProvider} from "./context";

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

function App() {
    return (
        <SocketProvider>
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
        </SocketProvider>
    );
}

export default App;
