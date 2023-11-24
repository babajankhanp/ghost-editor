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
        <UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" />
        <UserDetail>
          <UserName>
              {details.firstName.charAt(0).toUpperCase() + details.firstName.slice(1)}
          </UserName>
          <UserId>
           {details.email}
          </UserId>
        </UserDetail>
       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
        </svg>
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
