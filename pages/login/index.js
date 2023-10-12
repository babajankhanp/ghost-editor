/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import Head from 'next/head';

import {
  LoginPage
} from '@/components';

const index = () => (
  <>
    <Head>
      <title>Login | Wealthy Ghost Writer</title>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.6/css/all.css" />
      <script src="https://accounts.google.com/gsi/client" async defer />
      <script>
        {`
        function handleAuthentication(googleUser) {
          let profile = googleUser.getBasicProfile();
          console.log(profile, "<---");
          // window.location.href = 'localhost:9007/dashboard'
        }
        `}
      </script>
    </Head>
    <LoginPage />
  </>
);

export default index;
