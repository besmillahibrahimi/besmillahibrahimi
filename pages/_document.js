import {Head, Html, Main, NextScript} from 'next/document'
import React from "react";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZJ92SRMJMG" strategy="beforeInteractive"></Script>
            <Script id={'g-analytics-datalayer'} strategy="beforeInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-ZJ92SRMJMG');
                `}
            </Script>
            </body>
        </Html>
    )
}