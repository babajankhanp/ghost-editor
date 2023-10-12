/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';

import {
  checkUserAuthenticated
} from '@/helpers';

import Header from './Header';

const HeaderContainer = () => {
  const handleLogout = () => {
    localStorage.removeItem('wealthy_email');
    checkUserAuthenticated();
  };

  return (
    <Header
      handleLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
