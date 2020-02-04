/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {

    render() {
        return (
            <html>
                <Head>
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="MobileOptimized" content="320" />
                    <meta name="HandheldFriendly" content="True" />
                    <meta name="google" content="notranslate" />
                    {/* <meta name="robots" content="index, follow" /> */}
                    <meta name="subject" content="Embrace Your Identity in Marketing, minimally." />
                    <meta name="description" content="A unique platform that gives an identified digital dimension to your unknown materials and elements to make it stand out" />

                    <meta name="designer" content="Yahia &amp; ARJ" />
                    <meta name="author" content="xAmber Team - www.xamber.sa" />
                    <link rel="author" href="https://plus.google.com/u/0/112961538200891595300" />
                    <link href="https://fonts.googleapis.com/css?family=Tajawal:400,500,700,800,900" rel="stylesheet" />

                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet" type="text/css" />
                    <link href="https://fonts.googleapis.com/css?family=Tajawal:400,500,700,800,900" rel="stylesheet" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png" />
                    <link rel="mask-icon" href="/static/images/favicon/safari-pinned-tab.svg" color="#F0670A" />
                    <meta name="msapplication-TileColor" content="#fffcf2" />
                    <meta name="theme-color" content="#F0670A" />
                    <link rel="shortcut icon" type="image/x-icon" href="/static/images/favicon/favicon.ico" />
                    <link rel="icon" sizes="196x196" href="/static/images/favicon/favicon-196x196.png" />

                    {/* <meta name="robots" content="index" /> */}
                    <meta name="revisit-after" content="30 days" />
                    <meta name="keywords" content="xamber, startup, platform, saudi arabia, awesome, save, share, create, shorten, qr code, short link, short URL" />
                    <meta name='target' content='all' />
                    <meta name='subtitle' content='Empowering Sharing' />
                    <meta name='copyright' content='xAmber' />
                    <meta name='language' content='EN' />
                    <link rel="canonical" href="https://xamber.sa/" />
                    <link rel="alternate" href="https://xamber.sa/" hrefLang="en" />
                    <link rel="alternate" href="https://xamber.sa/ar/" hrefLang="ar" />
                    <link rel="author" href="http://plus.google.com/u/0/112961538200891595300" />
                    <meta name="robots" content="noindex,nofollow" />
                    {this.props.styleTags}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.recaptchaCallback = function() { window.isCaptchaReady = true; }`,
                        }}
                    />
                    <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer />
                    <script dangerouslySetInnerHTML={{ __html: `<!--    BIXET ® | Developing A Lifestyle ™    -->` }} />
                </Head>
                <body style={style}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default AppDocument;
