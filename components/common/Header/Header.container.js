/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useEffect,
  useState
} from 'react';

import {
  alignCenter
} from 'fontawesome';

import {
  checkUserAuthenticated
} from '@/helpers';

import Header from './Header';

const HeaderContainer = () => {
  const [details, setDetails] = useState({
    firstName: '',
    email: ''
  });

  // useEffect(() => {
  //     const wealthyEmail = localStorage.getItem('wealthy_email');
  //   const regex = /([^@.]+)[@.]/;
  //   const match = wealthyEmail.match(regex);
  //   if (match) {
  //     const nameBeforeAtAndDot = match[1];
  //     setDetails({
  //       ...details,
  //       firstName: nameBeforeAtAndDot,
  //       email: wealthyEmail
  //     });
  //   } else {
  //     alert('Email address is not in the expected format');
  //   }
  // }, []);

  const handleLogout = () => {
    // localStorage.removeItem('wealthy_email');
    // checkUserAuthenticated();
  };
  return (
    <Header
      handleLogout={handleLogout}
      details={details}
    />
  );
};

export default HeaderContainer;
