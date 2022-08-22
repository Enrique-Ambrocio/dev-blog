import { ApolloProvider } from '@apollo/client';
import { Fragment } from 'react';
import Header from '../components/UI/header'
import { client } from '../lib/apollo';
import '../styles/global.css'


export default function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Fragment>
                <Header />
                <Component {...pageProps} />
            </Fragment>
        </ApolloProvider>
    );
}
