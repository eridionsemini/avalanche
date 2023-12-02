import React from 'react';
import {InMemoryCache, ApolloClient, ApolloProvider} from "@apollo/client";

import {SocketProvider} from "./context";
import {Home} from "./components";
import logo from './logo.svg';
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
                            <Home title='Graph QL'/>
                        </a>
                    </header>

                </div>
            </ApolloProvider>
        </SocketProvider>
    );
}

export default App;
