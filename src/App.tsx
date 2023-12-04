import React from 'react';
import {InMemoryCache, ApolloClient, ApolloProvider} from "@apollo/client";
import {DynamicContextProvider, SortWallets} from "@dynamic-labs/sdk-react";

import {SocketProvider} from "./context";
import {Home} from "./pages";
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

function App() {
    return (
        <SocketProvider>
            <DynamicContextProvider
                settings={{
                    environmentId: "f0b977d0-b712-49f1-af89-2a24c47674da",
                    walletsFilter: SortWallets(["coinbase", "metamask", "rainbow"]),
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
                        <Home/>
                    </div>
                </ApolloProvider>
            </DynamicContextProvider>
        </SocketProvider>
    );
}

export default App;
