declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_GRAPHQL_API_URL: string;
            REACT_APP_WEB_SOCKET_URL: string;
        }
    }
}
