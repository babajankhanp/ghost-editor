/**
Author - Sahil Dhingra
Git - https://github.com/sahildhingra-221
* */

import React, {
  useEffect,
  useState
} from 'react';


import LoginPage from './LoginPage';

const LoginPageContainer = () => {
  const [userMail, setUserMail] = useState('');



  const handleLogin = async () => {
    if (userMail.includes('@wealthy.in')) {
      // const fetchApi = await fetch('/api//user/login', {
      //   method: 'POST',
      //   body: JSON.stringify({email: userMail}),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      // const res = await fetchApi.json();
      localStorage.setItem('wealthy_email', userMail);
      window.location.href = '/dashboard';
      // console.log(res, '<-- login res');
    } else {
      alert('Unauthorized Email!');
    }
  };

  useEffect(() => {
    const wealthyEmail = localStorage.getItem('wealthy_email');
    if (wealthyEmail) {
      window.location.href = '/dashboard';
    }
  }, []);

  return (
    <LoginPage
      userMail={userMail}
      setUserMail={setUserMail}
      handleLogin={handleLogin}
    />
  );
};

export default LoginPageContainer;
