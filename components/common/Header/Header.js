/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled from 'styled-components';

import {
  appEnv
} from '@/helpers';
import {
  colors
} from '@/constants';

import { SignOutButton,  UserButton, } from "@clerk/nextjs";


const wealthyLogo = `${appEnv.WEALTHY_CDN}/wealthy-home-page/wealthy-logo-purple.png`;
const dropdownIcon = `${appEnv.WEALTHY_CDN}/insights-new-release/articles/purple-arrow.png`;

const Header = ({
  handleLogout,
  details
}) => (
  <HeaderWrapper>
    <HeaderBar>
      <LogoWrapper>
        <Logo src={wealthyLogo} />
        <AppTitle>
          Mailer
        </AppTitle>
      </LogoWrapper>
      <UserInfoWrapper onClick={handleLogout}>
        {/* <UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" /> */}
        <UserDetail>
          <UserName>
              {details.firstName.charAt(0).toUpperCase() + details.firstName.slice(1)}
          </UserName>
          <UserId>
           {details.email}
          </UserId>
        </UserDetail>
        <UserButton afterSignOutUrl="/" />
      </UserInfoWrapper>
    </HeaderBar>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  padding: 20px 50px;
`;

const HeaderBar = styled.div`
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(15px);
  background-color: rgba(232,234,241,.75);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
  transform: translateY(1px);
`;

const AppTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  color: ${colors.textPrimary};
  position: relative;
  padding-left: 30px;

  &::before {
    content: "";
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 1px;
    background-color: ${colors.textPrimary};
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  object-fit: cover;
`;

const UserDetail = styled.div`
  padding: 0 15px;
  font-weight: 500;

  span {
    display: block;
  }
`;

const UserName = styled.span`
  color: ${colors.textPrimary};
`;

const UserId = styled.span`
  padding-top: 4px;
  color: ${colors.textSecondry};
  font-size: 12px;
`;

const IconDd = styled.img`
  height: 8px;
`;

export default Header;
