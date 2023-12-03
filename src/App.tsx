import React from 'react';
import {InMemoryCache, ApolloClient, ApolloProvider} from "@apollo/client";

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
            <ApolloProvider client={client}>
                <div className="App">
                  <Home/>
                </div>
            </ApolloProvider>
        </SocketProvider>
    );
}

export default App;
