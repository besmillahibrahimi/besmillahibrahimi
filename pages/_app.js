import '../styles/globals.css'
import {AppProvider} from "../context/AppContext";
import React, {useEffect, useState} from "react";
import Loading from "../components/loading";
import Template from "../components/template";
import lang from "../public/locales/en.json";
import Head from "next/head";
import {Poppins} from 'next/font/google'
import {useRouter} from "next/router";
import AdminLayout from "../components/layout/AdminLayout";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function MyApp({Component, pageProps}) {
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();

    const getLayout = () => router.asPath.startsWith("/admin") ? AdminLayout : Template;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    const header = 'https://firebasestorage.googleapis.com/v0/b/abzar-kankor.appspot.com/o/header-min.png?alt=media'

    const Layout = Component.Layout || getLayout();
    return <>
        <Head>
            <title>Besmillah Ibrahimi</title>
            <meta name="description" content={lang.app_desc}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
            <meta name="apple-mobile-web-app-title" content="ibrahimi.info"/>
            <meta name="application-name" content="Besmillah Ibrahimi"/>
            <link rel="icon" href="/favicon.ico"/>

            <meta name="keywords"
                  content="software development, engineering, rails, javascript, ruby, python, java, android, flutter, dart, resume, cv, Besmillah Ibrahimi, html, css, sql, nosql, ios, office, excel, word"/>

            <meta name="author" content={lang.app_name}/>
            <meta property="og:site_name" content="Besmillah Ibrahimi"/>
            <meta property="og:title" content={lang.app_name}/>
            <meta property="og:description" content={lang.app_desc}/>
            <meta property="og:image" content={header}/>
            <meta property="og:image:url" content={header}/>
            <meta property="og:image:type" content='image/png'/>
            <meta property="og:image:secure_url" content={header}/>
            <meta property="og:url" content="https://ibrahimi.info"/>
            <meta property="og:type" content="website"/>

            <meta name="twitter:site" content="@bes_ibrahimi"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="twitter:domain" content="ibrahimi.info"/>
            <meta property="twitter:url" content="https://ibrahimi.info"/>
            <meta name="twitter:title" content="Besmillah Ibrahimi"/>
            <meta name="twitter:description" content={lang.app_desc}/>
            <meta name="twitter:image" content={header}/>
            <meta name="twitter:image:src" content={header}/>
            <meta name="twitter:image:url" content={header}/>
            <meta name="twitter:image:secure_url" content={header}/>

            <meta property="forem:name" content="Besmillah Ibrahimi"/>
            <meta property="forem:logo" content={header}/>
            <meta property="forem:domain" content="ibrahimi.info"/>
        </Head>

        <main className={`${poppins.className}`}>
            <AppProvider>
                {isLoading &&

                    <div className={`w-full absolute z-50 h-screen flex justify-center items-center bg-secondary-800`}>
                        <Loading/>
                    </div>

                }
                <Layout>
                    <Component {...pageProps} />
                </Layout>

            </AppProvider>
        </main>
    </>
}

export default MyApp
