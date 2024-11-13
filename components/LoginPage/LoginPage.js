/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React from 'react';
import styled, {
  keyframes
} from 'styled-components';

import { SignedIn, SignedOut, SignInButton, SignOutButton,auth } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

import {
  appEnv
} from '@/helpers';
import {
  colors
} from '@/constants';

const wealthyLogo = `${appEnv.WEALTHY_CDN}/wealthy-home-page/wealthy-logo-purple.png`;
const mailerPreview = `${appEnv.WEALTHY_CDN}/articles/mailer-preview.png`;

const LoginPage = ({
  handleLogin,
  userMail,
  setUserMail
}) => {
   const {userId, } = useAuth();

  return (
  <MainWrapper>
    <FormWrapper>
      <ContentSection>
       Babajan 
        <AuthWrapper>
          <Title>Welcome to  Mailer</Title>
          <Subline>Login to create templates for email</Subline>
          {
            userId ?
           ( <ButtonRedirect href="/dashboard">Go To Dashboard</ButtonRedirect> ):
            <SignInButton
               mode="modal"
                redirectUrl="/dashboard"
            >
          <Button>Sign In</Button>
          </SignInButton>
          }
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
    <LoginImageWrapper>
      <AnimatedText> Template</AnimatedText>
      <LoginImage src={mailerPreview} />
    </LoginImageWrapper>

  </MainWrapper>
)
};

const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;

const FormWrapper = styled.div`
  width: 40%;
  background-color: #fff;
  flex: 1;
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

const LoginImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    position: relative;
    flex:1;
    /* background: linear-gradient(to right, #7f00ff, #e100ff); */
      background: linear-gradient(to right, #1c92d2, #f2fcfe); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const LoginImage = styled.img`
   width: 90%;
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const AnimatedText = styled.h6`
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: 200% auto;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 2s linear infinite;
  display: inline-block;
  font-size: 90px;
  margin-bottom: 2rem;
`;

const Button = styled.button`
    padding: 10px 30px;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 1px;
    border: 1px solid transparent;
    background-color: #6725F4;
    border-color: #6725F4;
    color: #fff;
`;

const ButtonRedirect = styled.a`
    padding: 10px 30px;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 1px;
    border: 1px solid transparent;
    background-color: #6725F4;
    border-color: #6725F4;
    color: #fff;
`;

export default LoginPage;
