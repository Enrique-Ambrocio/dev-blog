import { ApolloProvider } from '@apollo/client';
import Script from 'next/script';
import { Fragment } from 'react';
import Footer from '../components/UI/footer';
import Header from '../components/UI/header'
import { client } from '../lib/apollo';
import '../styles/global.css'


export default function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Fragment>
                <Header />
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-5GK6JTT6XS" />
                <Script >
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-5GK6JTT6XS')
                    `}
                </Script>
                <Component {...pageProps} />
                <Footer />
            </Fragment>
        </ApolloProvider>
    );
} 