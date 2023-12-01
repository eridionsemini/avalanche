import React from 'react';
import {InMemoryCache, ApolloClient, ApolloProvider, split, HttpLink} from "@apollo/client";
import {getMainDefinition} from '@apollo/client/utilities';
import {GraphQLWsLink} from '@apollo/client/link/subscriptions';
import {createClient} from 'graphql-ws';


import logo from './logo.svg';
import './App.css';

const fallbackWebSocketUrl = 'ws://ec2-3-216-28-214.compute-1.amazonaws.com:4000';

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

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_API_URL
});

const wsLink = new GraphQLWsLink(createClient({
    url: process.env.REACT_APP_WEB_SOCKET_URL ?? fallbackWebSocketUrl
}));

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);


const client = new ApolloClient({
    link: splitLink,
    cache,
    connectToDevTools: process.env.NODE_ENV === 'development'
})

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link text-2xl"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </ApolloProvider>
    );
}

export default App;
