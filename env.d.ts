declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_GRAPHQL_API: string;
        }
    }
}
