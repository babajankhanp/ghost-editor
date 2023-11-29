/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useEffect
} from 'react';
import Head from 'next/head';

import LoginPage from '@/components/LoginPage/LoginPage';

const index = () => (
  <>
    <Head>
      <title>Login | Wealthy Ghost Writer</title>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.6/css/all.css" />
      <script src="https://accounts.google.com/gsi/client" async defer />
    </Head>
    <LoginPage />
  </>
);
export default index;
