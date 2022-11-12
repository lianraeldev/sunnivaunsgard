import React from 'react';
import Head from "next/head";
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Home - Sunniva Unsgård</title>
                <meta name="description" content="Home - Sunniva Unsgård." />
                <meta name="og:title" property="og:title" content="Home - Sunniva Unsgård"></meta>
                <meta name="twitter:card" content="Home - Sunniva Unsgård"></meta>
                <link rel="canonical" href="http://sunnivaunsgard.com"></link>
            </Head>

            <Navbar />

            {children}

            <Footer />
        </>
    );
}

export default Layout;