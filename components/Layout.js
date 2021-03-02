import React from 'react';
import Head from 'next/head';
import Navbar from './ui/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Animeaza | The Anime Blog</title>
        <meta name='description' content='Animeaza' />
      </Head>
      <Navbar />

      <main>{children}</main>
    </>
  );
};

export default Layout;
