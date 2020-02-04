import React from 'react';
import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';


class MyApp extends App {

    render() {
        const { Component,  pageProps } = this.props;
        return (
            <>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </>
        )
    }
}   


export default MyApp
