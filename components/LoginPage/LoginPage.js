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

const LoginPage = ({
  handleLogin,
  userMail,
  setUserMail
}) => (
  <MainWrapper>
    <FormWrapper>
      <ContentSection>
        <Logo src={wealthyLogo} />
        <AuthWrapper>
          <Title>Welcome to Wealthy Mailer</Title>
          <Subline>Login to create templates for email</Subline>
          <UserMail>
            <MailInput value={userMail} onChange={(e) => setUserMail(e.target.value)} placeholder="Enter email..." />
            <LoginBtn onClick={handleLogin}>
              <i className="fas fa-long-arrow-alt-right" />
            </LoginBtn>
          </UserMail>
          {/* <div
            id="g_id_onload"
            data-client_id="325665231230-l7sh66odkdhskhd59ele4469neihk095.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="popup"
            data-callback="handleAuthentication"
            data-nonce=""
            data-auto_select="true"
            data-itp_support="true"
          />
          <div
            className="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="filled_blue"
            data-text="signin_with"
            data-size="large"
            data-logo_alignment="left"
          /> */}
        </AuthWrapper>
        <Copyright>
          &copy; Wealthy 2023
        </Copyright>
      </ContentSection>
    </FormWrapper>
  </MainWrapper>
);

const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;

const FormWrapper = styled.div`
  width: 40%;
  background-color: #fff;
`;

const UserMail = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

const MailInput = styled.input`
  flex: 1;
  border: 0;
  outline: 0;
  padding: 12.5px 10px;
`;

const LoginBtn = styled.button`
  padding: 0 20px;
  color: #fff;
  background-color: #6725f5;
  font-size: 20px;
  cursor: pointer;

  &:hover i {
    transform: rotate(-360deg);
  }
`;

const ContentSection = styled.div`
  height: calc(100% - 40px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.img`
  height: 30px;
`;

const AuthWrapper = styled.div`
  max-width: 400px;
  margin: auto;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  color: ${colors.textPrimary};
`;

const Subline = styled.p`
  color: ${colors.textSecondry};
  padding: 10px 0 20px;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: ${colors.textSecondry};
`;

export default LoginPage;
