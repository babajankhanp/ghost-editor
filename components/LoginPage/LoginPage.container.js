/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useEffect,
  useState
} from 'react';

// import { useUser, currentUser } from "@clerk/clerk-react";

import LoginPage from './LoginPage';

const LoginPageContainer = () => {
  // const [userMail, setUserMail] = useState('');
  // const[firstName, setFirstName] = useState("")

  // const user = await currentUser();

  // console.log("name", user?.firstName)

  // const handleLogin = async () => {
  //   if (userMail.includes('@wealthy.in')) {
  //     // const fetchApi = await fetch('/api//user/login', {
  //     //   method: 'POST',
  //     //   body: JSON.stringify({email: userMail}),
  //     //   headers: {
  //     //     'Content-Type': 'application/json'
  //     //   }
  //     // });
  //     // const res = await fetchApi.json();
  //     localStorage.setItem('wealthy_email', userMail);
  //     window.location.href = '/dashboard';
  //     // console.log(res, '<-- login res');
  //   } else {
  //     alert('Unauthorized Email!');
  //   }
  // };

  // useEffect(() => {
  //   const wealthyEmail = localStorage.getItem('wealthy_email');
  //   if (wealthyEmail) {
  //     window.location.href = '/dashboard';
  //   }
  // }, []);

  // const handleUserDetails = async() => {
  //    const user = await currentUser();
  // }

  return (
    <LoginPage />
  );
};

export default LoginPageContainer;
